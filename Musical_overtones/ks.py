import numpy as np 
import wave, math
from collections import deque
import random
import pygame


sRate = 44100
nSample = sRate * 5 
x = np.arange(nSample)/float(sRate)
vals = np.sin(2.0*math.pi*22.0*x)
data = np.array(vals*32767, 'int16').tostring()
file = wave.open('sine220.wav', 'wb')
file.setparams((1,2,sRate,nSample, 'NONE', 'uncompresed'))
file.writeframes(data)
file.close()

#generate note of given frequency 
def generateNote(freq):
    nSamples = 44100
    sampleRate = 44100
    N = int(sampleRate/freq)
    #initialize ring buffer 
    buf = deque([random.random() - 0.5 for i in range(N)])
    #initialize samples buffer 
    samples = np.array([0]*nSamples, 'float32')
    for i in range(nSamples):
        samples[i] = buf[0]
	avg = 0.996*0.5*(buf[0] + buf[1])
	buf.append(avg)
	buf.popleft()  

    #convert samples to 16bit values and then to a string
    samples = np.array(samples*32767, 'int16')
    return samples.tostring()


def writeWAVE(fname, data):
    #open file
    file = wave.open(fname, 'wb')
    # WAV file paraments 
    nChannels = 1 
    sampleWidth = 2 
    frameRate = 44100 
    nFrames = 44100  
    #set parameters
    file.setparams((nChannels, sampleWidth, frameRate, nFrames, 'NONE', 'noncompressed'))
    file.writeframes(data)
    file.close()

class NotePlayer:
    #constructor
    def __init__(self):
	pygame.mixer.pre_init(44100, -16, 1, 2048)
	pygame.init()
	#dictionary of notes
	self.notes = {}
    #add note
    def add(self, fileName):
        self.notes[fileName] = pygame.mixer.Sound(fileName)
    #play a note 
    def play(self, fileName):
        try:
            self.notes[fileName].play()
	except:
	    print(fileName + ' not found!')
    def playRandom(self):
	index = random.randint(0, len(self.notes) -1)
	note = list(self.notes.values())[index]
	note.play()
