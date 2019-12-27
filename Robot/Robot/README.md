# Robot

The first command used MUST be PLACE in order to define the initial position of the Robot. After this, any command can be used at any time and in any order. Commands are NOT case sensitive and arguments DO NOT require any punctuation. For example, to place the Robot at (X=2), (Y=3) facing South, you would input 'place 2 3 south'.

**COMMANDS**

- PLACE [X] [Y] [FACING]
	Places the Robot in the position defined and in the heading defined.
- MOVE
	Moves the Robot forward by 1 unit in the direction it is facing.
- LEFT
	Rotates the heading of the Robot anti-clockwise by 90 degrees.
- RIGHT
	Rotates the heading of the Robot clockwise by 90 degrees.
- REPORT
	Indicates the current position of the Robot.
- END
	Ends the program.