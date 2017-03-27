/* global assert require */
/*jslint maxlen:140*/
'use strict';

var transliteration = require('../lib/translitit-latin-to-mkhedruli-georgian');
var assert = require('chai').assert;

describe('A Latin to Mkhedruli Georgian transliteration', function() {
  it('should work with common words', function() {
    assert.equal(transliteration('uprets’edento'), 'უპრეცედენტო');
    assert.equal(transliteration('masshtabis'), 'მასშტაბის');
    assert.equal(transliteration('hakat’oni'), 'ჰაკათონი');
    assert.equal(transliteration('ch’atardeba'), 'ჩატარდება');
    assert.equal(transliteration('or'), 'ორ');
    assert.equal(transliteration('dghiani'), 'დღიანი');
    assert.equal(transliteration('shejibria'), 'შეჯიბრია');
    assert.equal(transliteration('romelshits’'), 'რომელშიც');
    assert.equal(transliteration('programistebi'), 'პროგრამისტები');
    assert.equal(transliteration('developerebi'), 'დეველოპერები');
    assert.equal(transliteration('dizainerebi'), 'დიზაინერები');
    assert.equal(transliteration('da'), 'და');
    assert.equal(transliteration('inzhinrebi'), 'ინჟინრები');
    assert.equal(transliteration('mt’eli'), 'მთელი');
    assert.equal(transliteration('bat’umi'), 'ბათუმი');
    assert.equal(transliteration('sak’art’velos'), 'საქართველოს');
    assert.equal(transliteration('universitetebidan'), 'უნივერსიტეტებიდან');
    assert.equal(transliteration('skolebidan'), 'სკოლებიდან');
    assert.equal(transliteration('miigheben'), 'მიიღებენ');
    assert.equal(transliteration('monatsileobas'), 'მონაწილეობას');
    assert.equal(transliteration('monatsileobas'), 'მონაწილეობას');
    assert.equal(transliteration('studenti'), 'სტუდენტი');
    assert.equal(transliteration('mostsavle'), 'მოსწავლე');
    assert.equal(transliteration('msgavsi'), 'მსგავსი');
    assert.equal(transliteration('sididis'), 'სიდიდის');
    assert.equal(transliteration('studenturi'), 'სტუდენტური');
    assert.equal(transliteration('evropis'), 'ევროპის');
    assert.equal(transliteration('kontinentze'), 'კონტინენტზე');
    assert.equal(transliteration('pirvelia'), 'პირველია');
    assert.equal(transliteration('shthabechdileba'), 'შთაბეჭდილება');
  });

  it('should work with facebook kartuli-style', function() {
    assert.equal(transliteration('chemi lamazi rcali.isuper korici ise sagapao poli.'),
      'ჩემი ლამაზი რწალი.ისუპერ კორიწი ისე საგაპაო პოლი.');
    assert.equal(transliteration('ra qalixaf ufufuf:*:*'), 'რა ყალიხაფ უფუფუფ:*:*');
    assert.equal(transliteration('Xaxaxa'), 'ხახახა');
    assert.equal(transliteration('xo vizamt magas araa problema, axla ukve mec chamotria am proeqtma'),
      'ხო ვიზამტ მაგას არაა პრობლემა, ახლა უკვე მეწ ჭამოტრია ამ პროეყტმა');
    assert.equal(transliteration('kiii gavixseneb arifas naswavls'), 'კიიი გავიხსენებ არიფას ნასწავლს');
  });

  it('should work with dashes', function() {
    assert.equal(transliteration('igive-igive'), 'იგივე-იგივე');
  });

  it('should work with underscores', function() {
    assert.equal(transliteration('igive_igive'), 'იგივე_იგივე');
  });

  it('test empty and null string', function() {
    assert.equal(transliteration(''), '');
    assert.equal(transliteration(), '');
  });
});
