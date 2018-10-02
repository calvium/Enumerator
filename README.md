# Enumerator
Rename and number your artboards or layers based on their x,y position



![img](http://i.imgur.com/yfY98Z1.gif)


## Installation

1. Download plugin and double click to install


## Usage
(ctrl + alt + cmd + e) When you have a bunch of artboards, layers, or whatever and you want to give them all an incrementing number (ex: artboard 01, artboard 02, artboard 03, etc.), use this plugin. It'll look at the object’s x, y position and then number them accordingly from top to bottom, left to right. 

It will rename all Artboards on the current page.

This version (forked from the original at https://github.com/ScottSavarie/Enumerator) allows you to use insert the original artboard
name and the page name as well as the numbering.

##Examples

Here are some examples of what to type in the `User Input` box.

`Auth Flow {NUM}`
> Artboards will be named `Auth Flow 01`, `Auth Flow 02` from left-to-right

`{ARTBOARD} {NUM}`
> The original artboard names will be retained and the number added at the end e.g. `Empty Login 01`, `Filled Login 02` from left-to-right

`{NUM} {ARTBOARD}`
> The original artboard names will be retained and the number added at the start e.g. `01 Empty Login`, `Filled Login` from left-to-right

`{PAGE} {NUM}`
> Artboards will be named after the page, with the number at the end `First Page 01`, `First Page 02` from left-to-right

## Caveats

If you run the command a second time, the results may not quite be what you expect.
The plugin attempts to remove previously-added numbers and (if appropriate) page names etc, but it's certainly not 100% accurate.
The Edit > Undo menu will be helpful here.

## Contact

Original Author
Scott: [@ScottSavarie](https://www.twitter.com/scottsavarie)

Modified Version by [Calvium](https://www.calvium.com) 
