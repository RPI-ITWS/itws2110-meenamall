Meena Mall
Web Systems & Development
ReadMe 
Lab 5 - Frontend Optimization

After implementing all seven optimizations and introducing creative changes to the CSS, the behavior and functionality of the website remain entirely intact. The website still offers a seamless user experience, with faster loading times Users can continue to enjoy the same features and content, now with the improved performance and a more visually appealing design.

Creativity:
For the creativity aspect, I enhanced the visual appeal of my website by implementing changes to the fonts. I switched from the original ‘Serif’ font to ‘Verdana.’ I did this so that I could provide a more modern and user-friendly look. I also made the content more captivating by adding an italicized style to the fonts. This made the words, titles, and headings stand out and also made it more appealing and attractive appearance which could encourage users to spend more time on the website. By implementing these creative modifications, I effectively combined creativity with functionality to create an engaging and visually pleasing user experience.


Optimizations:

Opt #1: "Split CSS and JS into separate files"
For this optimization, I’ve separated the CSS and JavaScript code into separate files. The goal was to improve the website's performance and maintainability. By doing so, I’ve enhanced loading speed and made it easier to manage the code. This optimization that I implemented created a faster, more responsive user experience. For this optimization, I did not encounter any challenges or difficulties during the implementation.

Opt #2:  "Defer loading of JS and make sure CSS is loaded in head"
In the second optimization, I’ve improved performance by deferring JavaScript loading using the "defer" keyword, ensuring it doesn't block the page rendering. Additionally, I’ve placed CSS in the head section to guarantee styles load early. These changes enhance user experience and site speed and result in a more responsive and visually appealing website. For this optimization, I did not encounter any challenges or difficulties during the implementation. It was a very simple process.

Opt #3:  "Combine CSS rules"
For my third optimization, I’ve streamlined the website's CSS rules by eliminating redundancy. I recognized that multiple IDs shared the same CSS properties.  By consolidating these shared properties within a single section of CSS formatting leads to enhanced efficiency and simplifying maintenance. This change minimizes the CSS file's size and contributes to faster page loading times, offering a more responsive and resource-efficient website. For this optimization, I did not encounter any challenges or difficulties during the implementation. I simply looked for tags that had similiar content and put them together.

Opt #4:  "The number of getAttributeById function calls in the JS can be reduced"
For my fourth optimization, I’ve significantly minimized the number of getElementById function calls in the JavaScript code. I revamped the functions by eliminating redundant getElementById tags, opting instead for CSS IDs. This change aligns the formatting within the CSS file, ensuring a more organized and efficient approach. This results in a smoother user experience and improved page responsiveness. For this optimization, I did not encounter any challenges, it was just a genuine long process, but not difficult.


Opt #5:  "Minify CSS"
For my fifth optimization, I focused on minifying the CSS within the style.css file. This approach involved streamlining the code by removing comments, extra spaces, and reducing variables. This has a significant impact on the speed of network requests. The result is a more efficient and compact CSS file that enhances the website's overall load times, ensuring a better user experience without hurting its functionality. For this optimization I used the source below.

Opt #6:  "Minify JS"
For my sixth optimization, I tackled the JavaScript by minifying it, which involved removing unnecessary whitespace and comments, similar to the CSS. This condensed the code and made it more concise and efficient and also allowed it to fit on fewer lines. As a result, the JavaScript now processes faster and boosts network request speeds. For this optimization I used the source below.

Opt #7: "Convert PNGs to Browser PNG"
For my seventh optimization, I addressed image assets by converting a few PNG images into the more efficient Browser PNG format. I used the Squoosh App to convert these images. This conversion significantly reduced file sizes, leading to improved website performance. I basically replaced the original images with the newly compressed Browser PNG versions. This optimization decreased memory usage and led to faster loading times. For this optimization I did indeed encounter a difficulty. At first, the conversion was not working correctly. I had to search for other ways to do this process but once finding a website that actually worked, it was simple. The download was quick and easy.


Running Log:
Day 1: Determined which optimizations I would use
Day 2: Implemented optimizations 1-4
Day 3: Implemented optimizations 5-7 & implemented API
Day 4: Added creativity aspects
Day 5: Re checked all work & wrote ReadMe file



Sources:
https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia
https://www.toptal.com/developers/cssminifier
https://www.toptal.com/developers/javascript-minifier
https://squoosh.app/