# Software Studio 2023 Spring
## Assignment 01 Web Canvas

## Announcements
This is a project of the 2023 Spring Software studio class in National Tsing Hua University.
The program is written by daisyliu0225.

## Scoring

| **Basic components**                             | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Basic control tools                              | 30%       | Y         |
| Text input                                       | 10%       | Y         |
| Cursor icon                                      | 10%       | Y         |
| Refresh button                                   | 5%        | Y         |

| **Advanced tools**                               | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Different brush shapes                           | 15%       | Y         |
| Un/Re-do button                                  | 10%       | Y         |
| Image tool                                       | 5%        | Y         |
| Download                                         | 5%        | Y         |

| **Other useful widgets**                         | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Other features                                   | 1~5%      | Y         |

---

## How to use
Panel
-
- This is the panel of the project. The white part on the left is the canvas. The yellow part is the settings and the tools we use to draw on canvas. The default tool onload is the brush.
![panel](readme/panel.png)<br>

Tools
-
1. Cursor
   - When the user clicks on the cursor button, the cursor becomes a cursor and the canvas cannot do any editing.<br>
   - Button ![cursor button](readme/buttons/cursor.png)<br>
   - Cursor ![cursor cursor](resize_cursors/cursor.png)<br><br>
   
2. Brush
   - When the user clicks on the brush button, the cursor becomes the brush and the user can draw on the canvas.<br>
   - Button ![brush button](readme/buttons/brush.png)<br>
   - Cursor ![brush cursor](resize_cursors/brush.png)<br><br>
   
3. Eraser
   - When the user clicks on the eraser button, the cursor becomes an eraser and the user can erase things on canvas.<br>
   - Button ![eraser button](readme/buttons/eraser.png)<br>
   - Cursor ![eraser cursor](resize_cursors/eraser.png)<br><br>

4. Special Brushes(Circle/Triangle/Square)
   - When the user clicks on the circle/triangle/square brush, the cursor becomes special cursors and the user can draw the shapes.<br>
   - Circle
     - Button ![circle button](readme/buttons/circle.png)<br>
     - Cursor ![circle cursor](resize_cursors/cursor_circle.png)<br><br>
   - Square
     - Button ![square button](readme/buttons/square.png)<br>
     - Cursor ![square cursor](resize_cursors/cursor_square1.png)<br><br>
   - Triangle
     - Button ![triangle button](readme/buttons/triangle.png)<br>
     - Cursor ![triangle cursor](resize_cursors/cursor_triangle1.png)<br><br>
   
5. Text
   - When the user clicks on the text button, the cursor besomes text and the user can input text.<br>
   - Button ![text button](readme/buttons/text.png)<br>
   - Cursor ![text cursor](resize_cursors/text1.png)<br><br>
   
6. Reset
   - When the user clicks on the button, the user can reset the whole canvas. A small alert message shows.<br>
   - Button ![reset button](readme/buttons/circle.png)<br>
   - Cursor ![reset cursor](resize_cursors/cursor_circle.png)<br><br>
   
7. Upload/Download
   - Upload
     - When the user clicks on the upload button, the user can upload an image unto the canvas.<br>
     - Button ![upload button](readme/buttons/upload.png)<br><br>
   - Download
     - When the user clicks on the download button, the user can download the image on the canvas.<br>
     - Button ![download button](readme/buttons/download.png)<br><br>
     
8. Redo/Undo
   - Redo
     - When the user clicks on the redo button, the user can redo canvas.
     - Button ![redo button](readme/buttons/redo.png)<br><br>
   - Undo
     - When the user clicks on the undo button, the user can undo canvas.<br>
     - Button ![undo button](readme/buttons/undo.png)<br><br>

Settings
-
1. Color Picker
   - When the user clicks on color picker, the user can choose color and change color to draw.
   - ![color picker](readme/settings/color_picker.png)
   - Usage
   - Before
     ![before](readme/usage/color_picker/before.png)
   - Change
     ![change](readme/usage/color_picker/changecolor.png)
   - After
     ![result](readme/usage/color_picker/result.png)
<br><br>
2. Brush size
   - When the user clicks on the brush size slider, the user can choose the size of brush and special brush.
   - ![brush size](readme/settings/brush_size.png)
   - Usage
   - ![size1](readme/usage/brush_size/brushSize1.png)
   - ![size2](readme/usage/brush_size/brushSize2.png)
<br><br>
3. Font Settings
   - The user can change the font style in the first dropdown and change the font size in the second dropdown.
   - ![Font Settings](readme/settings/font_settings.png)
<br><br>
4. Shape Filling
   - The user can click on the checkbox to determine if the user wants the shape filled.
   - ![shape filling](readme/settings/Shape_settings.png)
<br><br>

## Bonus Function description
1. Special brush -- Line
   - When click on the button, the user can draw a line on canvas. The cursor turns into line cursor
   - Button ![line button](readme/buttons/line.png)<br>
   - Cursor ![line cursor](resize_cursors/cursor_line.png)
   - Usage ![line usage](readme/usage/addition/line.png)
<br><br>
2. Text input -- Stroke text
   - In addition to text style and text font, there is also a stroke text which can make the words hollow before user inputs text.
   - ![settings](readme/settings/font_settings2.png)
   - Below is than example of the difference of stroke/ no stroke
   - usage ![compare](readme/usage/stroke.png)
<br><br>
3. Stamp
   - The user can stamp on the canvas using after pressing the stamp button and the cursor turns into a stamp.<br>
   - The user can also change stamp style on the dropdown list in settings.<br>
   - Button ![stamp button](readme/buttons/stamp.png)<br>
   - Cursor ![stamp cursor](resize_cursors/stamp.png)<br><br>
   - The below are some examples using stamp <br>
   - ex1 ![ex1](readme/usage/addition/stamp_star1.png)
   - ex2 ![ex2](readme/usage/addition/stamp_heart.png)
<br><br>
4. ???
   - This is a special stamp. The stamp generates random shape between circle, square, heart and other shapes and also generates random color.<br>
   - The stamp is not affected by the style and color of stamp setting.<br>
   - Button ![question button](readme/buttons/question.png)<br>
   - Cursor ![question cursor](resize_cursors/cursor_question.png)<br>
   - The below are some examples of the feature.<br>
   - ex1 ![ex1](readme/usage/addition/question1.png)
   - ex2 ![ex2](readme/usage/addition/question2.png)
<br><br>



## Example using the drawing app
-
![example](readme/usage/tools/example.png)<br>

## Web page link

    your web page URL.

## Others (Optional)

I am so tired QQ.
![dying inside](readme/dying_inside.png)
---

## Versions
| Version | Date | Description |
|---|---|---|
|1|2024/03/22|html and css parts finished, probably get some cool features and beautify later|
|2|2024/03/23|upload to canvas successfully|
|3|2024/03/23|upload bug fix & reset finished|
|4|2024/03/23|download function finished|
|5|2024/03/24|Special brushes finished|
|6|2024/03/24|Text input finished|
|7|2024/03/25|Undo redo finished|
|8|2024/03/27|Addition functions finished|

<p align="right">--daisyliu0225</p>
