Georgian Mkhedruli to Latin Transliteration
=================================================
A JavaScript function that transliterate strings from latin to Mkhedruli Georgian.

This project is build using the [translitit-engine][translitit-engine], and its unit tests and transliteration tables are based on [translitit-cyrillic-russian-to-latin][translitit-cyrillic-russian-to-latin].

[translitit-engine]: https://github.com/gausby/translitit-engine
[translitit-cyrillic-russian-to-latin]: https://github.com/gausby/translitit-cyrillic-russian-to-latin

## Installation and Usage
Add it to your project by typing the following in your project root.

    npm install translitit-latin-to-mkhedruli-georgian --save
    OR
	bower install translitit-latin-to-mkhedruli-georgian --save

Now, you can include the transliteration service in your project by including it:

    var translit = require('translitit-latin-to-mkhedruli-georgian');

`translit` will now be a function, that will transliterate its input.

    translit('igive'); // returns 'იგივე'


## Development

After cloning the project you will have to run `npm install` in the project root. This will install the testing dependencies.

#### Unit Tests

When developing you want to run the script watcher. Navigate to the project root and type the following in your terminal.

    $ npm run watch

This will run the tests each time a file has been modified.


## License
The MIT License (MIT)

Copyright (c) 2014-2017 Batumi github org contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
