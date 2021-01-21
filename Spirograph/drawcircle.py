import math
import turtle as turtle 

#draw circle using turtle 
def drawCircleTurtle(x, y, r):
    #move to the start of circle
    turtle.up()
    turtle.setpos(x + y, r) 
    turtle.down()

    #draw the circle 
    for i in range(0, 365, 5):
        a = math.radians(i)
        turtle.setpos(x + r*math.cos(a), y + r*math.sin(a))

drawCircleTurtle(100, 100, 50)
turtle.mainloop()  