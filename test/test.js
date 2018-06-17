'use strict';

var chai = require('chai');
var numbersWithLetters = require('../index');

describe('#amount2Text', function () {
    it('should convert single digits', function () {
        var result = numbersWithLetters.amount2Text(1);
        chai.expect(result).to.equal('bir');

        var result = numbersWithLetters.amount2Text(5);
        chai.expect(result).to.equal("beş");

        var result = numbersWithLetters.amount2Text(0);
        chai.expect(result).to.equal("");
    });

    it('should convert double digits', function () {
        var result = numbersWithLetters.amount2Text(10);
        chai.expect(result).to.equal('on');

        var yirmi = numbersWithLetters.amount2Text(20);
        chai.expect(yirmi).to.equal('yirmi');

        var yirmibir = numbersWithLetters.amount2Text(21);
        chai.expect(yirmibir).to.equal('yirmibir');

        var seksenuc = numbersWithLetters.amount2Text(83);
        chai.expect(seksenuc).to.equal('seksenüç');
    });

    it('should convert triple digits for one hundred', function () {
        var yuz = numbersWithLetters.amount2Text(100);
        chai.expect(yuz).to.equal('yüz');

        var yuzon = numbersWithLetters.amount2Text(110);
        chai.expect(yuzon).to.equal('yüzon');

        var yuzonbir = numbersWithLetters.amount2Text(111);
        chai.expect(yuzonbir).to.equal('yüzonbir');

        var yuzbir = numbersWithLetters.amount2Text(101);
        chai.expect(yuzbir).to.equal('yüzbir');
    });

    it('should convert triple digits higher than one hundred', function () {
        var ikiyuz = numbersWithLetters.amount2Text(200);
        var ikiyuzelli = numbersWithLetters.amount2Text(250);
        var ikiyuzellialti = numbersWithLetters.amount2Text(256);
        var dortyuzdokuz = numbersWithLetters.amount2Text(409);

        chai.expect(ikiyuz).to.equal('ikiyüz');
        chai.expect(ikiyuzelli).to.equal('ikiyüzelli');
        chai.expect(ikiyuzellialti).to.equal('ikiyüzellialtı');

        chai.expect(dortyuzdokuz).to.equal('dörtyüzdokuz');
    });

    it('should convert quadriple digits for one thousand', function () {
        var bin = numbersWithLetters.amount2Text(1000);
        var binikiyuz = numbersWithLetters.amount2Text(1200);
        var binelli = numbersWithLetters.amount2Text(1050);
        var bindokuz = numbersWithLetters.amount2Text(1009);
        var binseksenbes = numbersWithLetters.amount2Text(1085);

        chai.expect(bin).to.equal('bin');
        chai.expect(binikiyuz).to.equal('binikiyüz');
        chai.expect(binelli).to.equal('binelli');
        chai.expect(bindokuz).to.equal('bindokuz');
        chai.expect(binseksenbes).to.equal('binseksenbeş');
    });

    it('should convert four digits higher than one thousand', function () {
        var ikibin = numbersWithLetters.amount2Text(2000);
        var ikibiniki = numbersWithLetters.amount2Text(2002);
        var ikibinyirmiiki = numbersWithLetters.amount2Text(2022);
        var ikibinikiyuzyirmiiki = numbersWithLetters.amount2Text(2222);
        var ikibinikiyuzyirmi = numbersWithLetters.amount2Text(2220);
        var ikibinikiyuz = numbersWithLetters.amount2Text(2200);
        var ikibinyirmi = numbersWithLetters.amount2Text(2020);

        chai.expect(ikibin).to.equal('ikibin');
        chai.expect(ikibiniki).to.equal('ikibiniki');
        chai.expect(ikibinyirmi).to.equal('ikibinyirmi');
        chai.expect(ikibinyirmiiki).to.equal('ikibinyirmiiki');
        chai.expect(ikibinikiyuzyirmiiki).to.equal('ikibinikiyüzyirmiiki');
        chai.expect(ikibinikiyuzyirmi).to.equal('ikibinikiyüzyirmi');
        chai.expect(ikibinikiyuz).to.equal('ikibinikiyüz');
    });

    it('should convert five digits', function () {
        var onbin = numbersWithLetters.amount2Text(10000);
        chai.expect(onbin).to.equal('onbin');
        var onikibin = numbersWithLetters.amount2Text(12000);
        chai.expect(onikibin).to.equal('onikibin');
        var yirmiucbindortyuzellibes = numbersWithLetters.amount2Text(23455);
        chai.expect(yirmiucbindortyuzellibes).to.equal('yirmiüçbindörtyüzellibeş');
        var doksandokuzbindokuzyuzdoksan = numbersWithLetters.amount2Text(99990);
        chai.expect(doksandokuzbindokuzyuzdoksan).to.equal('doksandokuzbindokuzyüzdoksan');
    });

    it('should convert six digits', function () {
        var yuzbin = numbersWithLetters.amount2Text(100000);
        chai.expect(yuzbin).to.equal('yüzbin');

        var ikiyuzbin = numbersWithLetters.amount2Text(200000);
        chai.expect(ikiyuzbin).to.equal('ikiyüzbin');
    });

    it('should convert seven digits', function () {
        var birmilyon = numbersWithLetters.amount2Text(1000000);
        chai.expect(birmilyon).to.equal('birmilyon');

        var ikimilyon = numbersWithLetters.amount2Text(2000000);
        chai.expect(ikimilyon).to.equal('ikimilyon');

        var ikimilyononuc = numbersWithLetters.amount2Text(2000013);
        chai.expect(ikimilyononuc).to.equal('ikimilyononüç');

        var birmilyononbinyuz = numbersWithLetters.amount2Text(1010100);
        chai.expect(birmilyononbinyuz).to.equal('birmilyononbinyüz');
    });

    it('should convert eight and nine digits', function () {
        var onmilyonikibindokuzyuzaltmisalti = numbersWithLetters.amount2Text(10002966);
        chai.expect(onmilyonikibindokuzyuzaltmisalti).to.equal('onmilyonikibindokuzyüzaltmışaltı');
    });

    it('should convert nine digits and more', function(){
        var yuzyirmialtimilyarbirmilyonkirkdortbinbesyuzaltmis = numbersWithLetters.amount2Text(126001044560);
        chai.expect(yuzyirmialtimilyarbirmilyonkirkdortbinbesyuzaltmis).to.equal('yüzyirmialtımilyarbirmilyonkırkdörtbinbeşyüzaltmış')
    });
});