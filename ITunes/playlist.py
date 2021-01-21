import plistlib
import numpy as np
import matplotlib.pyplot as plt
import argparse


def findDuplicates(fileName):
    print('Finding duplicate tracks in $s...' % fileName)
    #read in a playlist
    plist = plistlib.readPlist(fileName)
    #get tracks from the track section
    tracks = plist['Tracks']
    #create a track name dictionary
    trackNames = {}
    #iterate trough the track
    for trackId, track in tracks.items():
        try:
            name = track['Name']
            duration = track['Total Time']
            #look for existing entries
            if name in trackNames:
                # if the track and duration match increment the count
                # round the track lenght to the nearest second
                if duration // 1000 == trackNames[name][0] // 1000:
                    count = trackNames[name][1]
                    trackNames[name] = (duration, count + 1)
                else:
                    #add dictionary entry as a tuple (duration, count)
                    trackNames[name] = (duration, 1)
        except:
            #ignore
            pass

    #store duplicates as (name,count) tuples
    dups = []
    for k, v in trackNames.items():
        if v[1] > 1:
            dups.append((v[1], k))
        # save duplicates to a file
        if len(dups) > 0:
            print("Found %d duplicates.Track names saved to dup.txt" % len(dups))
        else:
            print("No duplicate track found!")
        f = open("dups.txt", "w")
        for val in dups:
            f.write("[%d] %s\n" % (val[0], val[1]))
        f.close()


def findCommonTracks(fileNames):
    # a list of sets of track names
    trackNamesSets = []
    for fileName in fileNames:
        #create a new set
        trackName = set()
        #read in playlist
        plist = plistlib.readPlist(fileName)
        #get the tracks
        tracks = plist['Tracks']
        #iterate through the track
        for trackId, track in tracks.items():
            try:
                #add the track name to a set
                trackName.add(track['Name'])
            except:
                #ignore
                pass
        #add to list
        trackNamesSets.append(trackName)
    #get the set of common tracks
    commonTracks = set.intersection(*trackNamesSets)
    #write to file
    if len(commonTracks) > 0:
        f = open("common.txt", "w")
        for val in commonTracks:
            s = "%s\n" % val
            f.write(s.encode("UTF-8"))
        f.close()
        print("%d common tracks found."
              "Track names written to common.txt." % len(commonTracks))
    else:
        print("No common tracks!")

def plotStats(fileName):
    #read a playlist
    plist  = plistlib.readPlist(fileName)
    #get the tracks from the playlist 
    tracks = plist['Tracks']
    #create lists of song rating and track durations
    ratings = []
    durations = []
    #iterate through the track 
    for trackId, track in tracks.items():
        try:
            ratings.append(track['Album Rating'])
            durations.append(track['Total Time'])
        except:
            #ignore
            pass 
    #ensure the valid data was collected 
    if ratings == [] or durations == []:
        print("No valid Album Rating/Total Time data in %s." % fileName)
        return 

    #scatter plot 
    x = np.array(durations, np.int32)
    #convert to a minute 
    x = x/60000.0 
    y = np.array(ratings, np.int32)
    plt.subplot(2,1,1)
    plt.plot(x, y, 'o')
    plt.axis([0,1.05*np.max(x), -1, 110])
    plt.xlabel('Track Duration')
    plt.ylabel('Track Rating')

    #plot histogram 
    plt.subplot(2,1,2)
    plt.hist(x, bins=20)
    plt.xlabel('Track Duration')
    plt.ylabel('Count')

    plt.plot()

def main():
    # create parser 
    descStr = """
    This program analyzes playlist files (.xml) exported from ITunes"""

    parser = argparse.ArgumentParser(description=descStr)
    #add a mutually exclusive group of arguments 
    group = parser.add_mutually_exclusive_group()

    #add expected arguments
    group.add_argument('--common', nargs='*', dest='plFiles', required=False)
    group.add_argument('--stats', dest='plFile', required=False)
    group.add_argument('--dup', dest='plFileD', required=False)

    #parse args
    args = parser.parse_args()

    if args.plFiles:
        #find common track 
        findCommonTracks(args.plFiles)
    elif args.plFile:
        #plot stats
        plotStats(args.plFlies)
    elif args.plFileD:
        #find duplicate tracks
        findDuplicates(args.plFileD)
    else:
        print("These are not the tracks you are looking for.")
        
    if __name__ == '__main__':
        main()