/* global assert require */
/*jslint maxlen:140*/
'use strict';

var transliteration = require('../lib/translitit-latin-to-mkhedruli-georgian'),
    buster = require('buster'),
    assert = buster.referee.assert,
    refute = buster.referee.refute
;

buster.testCase('A cyrillic russian transliteration', {
    'should work with common words': function(){
        assert.equals(transliteration('uprets’edento'), 'უპრეცედენტო');
        assert.equals(transliteration('masshtabis'), 'მასშტაბის');
        assert.equals(transliteration('hakat’oni'), 'ჰაკათონი');
        assert.equals(transliteration('ch’atardeba'), 'ჩატარდება');
        assert.equals(transliteration('or'), 'ორ');
        assert.equals(transliteration('dghiani'), 'დღიანი');
        assert.equals(transliteration('shejibria'), 'შეჯიბრია');
        assert.equals(transliteration('romelshits’'), 'რომელშიც');
        assert.equals(transliteration('programistebi'), 'პროგრამისტები');
        assert.equals(transliteration('developerebi'), 'დეველოპერები');
        assert.equals(transliteration('dizainerebi'), 'დიზაინერები');
        assert.equals(transliteration('da'), 'და');
        assert.equals(transliteration('inzhinrebi'), 'ინჟინრები');
        assert.equals(transliteration('mt’eli'), 'მთელი');
        assert.equals(transliteration('sak’art’velos'), 'საქართველოს');
        assert.equals(transliteration('universitetebidan'), 'უნივერსიტეტებიდან');
        assert.equals(transliteration('skolebidan'), 'სკოლებიდან');
        assert.equals(transliteration('miigheben'), 'მიიღებენ');
        assert.equals(transliteration('monatsileobas'), 'მონაწილეობას');
        assert.equals(transliteration('monatsileobas'), 'მონაწილეობას');
        assert.equals(transliteration('studenti'), 'სტუდენტი');
        assert.equals(transliteration('mostsavle'), 'მოსწავლე');
        assert.equals(transliteration('msgavsi'), 'მსგავსი');
        assert.equals(transliteration('sididis'), 'სიდიდის');
        assert.equals(transliteration('studenturi'), 'სტუდენტური');
        assert.equals(transliteration('evropis'), 'ევროპის');
        assert.equals(transliteration('kontinentze'), 'კონტინენტზე');
        assert.equals(transliteration('pirvelia'), 'პირველია');
        assert.equals(transliteration('shthabechdileba'), 'შთაბეჭდილება');
    },

    'should work with dashes': function(){
        assert.equals(transliteration('igive-igive'), 'იგივე-იგივე');
    },

    'should work with underscores': function(){
        assert.equals(transliteration('igive_igive'), 'იგივე_იგივე');
    },

    'test empty and null string': function(){
        assert.equals(transliteration(''), '');
        assert.equals(transliteration(), '');
    }
});
