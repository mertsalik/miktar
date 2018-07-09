'use strict';

var chai = require('chai');
var miktar = require('../index');

describe('#miktar', function () {
    it('should convert single digits', function () {
        var result = miktar.amount2Text(1);
        chai.expect(result).to.equal('bir');

        var result = miktar.amount2Text(5);
        chai.expect(result).to.equal("beş");

        var result = miktar.amount2Text(0);
        chai.expect(result).to.equal("");
    });

    it('should convert double digits', function () {
        var result = miktar.amount2Text(10);
        chai.expect(result).to.equal('on');

        var yirmi = miktar.amount2Text(20);
        chai.expect(yirmi).to.equal('yirmi');

        var yirmibir = miktar.amount2Text(21);
        chai.expect(yirmibir).to.equal('yirmibir');

        var seksenuc = miktar.amount2Text(83);
        chai.expect(seksenuc).to.equal('seksenüç');
    });

    it('should convert triple digits for one hundred', function () {
        var yuz = miktar.amount2Text(100);
        chai.expect(yuz).to.equal('yüz');

        var yuzon = miktar.amount2Text(110);
        chai.expect(yuzon).to.equal('yüzon');

        var yuzonbir = miktar.amount2Text(111);
        chai.expect(yuzonbir).to.equal('yüzonbir');

        var yuzbir = miktar.amount2Text(101);
        chai.expect(yuzbir).to.equal('yüzbir');
    });

    it('should convert triple digits higher than one hundred', function () {
        var ikiyuz = miktar.amount2Text(200);
        var ikiyuzelli = miktar.amount2Text(250);
        var ikiyuzellialti = miktar.amount2Text(256);
        var dortyuzdokuz = miktar.amount2Text(409);

        chai.expect(ikiyuz).to.equal('ikiyüz');
        chai.expect(ikiyuzelli).to.equal('ikiyüzelli');
        chai.expect(ikiyuzellialti).to.equal('ikiyüzellialtı');

        chai.expect(dortyuzdokuz).to.equal('dörtyüzdokuz');
    });

    it('should convert quadriple digits for one thousand', function () {
        var bin = miktar.amount2Text(1000);
        var binikiyuz = miktar.amount2Text(1200);
        var binelli = miktar.amount2Text(1050);
        var bindokuz = miktar.amount2Text(1009);
        var binseksenbes = miktar.amount2Text(1085);

        chai.expect(bin).to.equal('bin');
        chai.expect(binikiyuz).to.equal('binikiyüz');
        chai.expect(binelli).to.equal('binelli');
        chai.expect(bindokuz).to.equal('bindokuz');
        chai.expect(binseksenbes).to.equal('binseksenbeş');
    });

    it('should convert four digits higher than one thousand', function () {
        var ikibin = miktar.amount2Text(2000);
        var ikibiniki = miktar.amount2Text(2002);
        var ikibinyirmiiki = miktar.amount2Text(2022);
        var ikibinikiyuzyirmiiki = miktar.amount2Text(2222);
        var ikibinikiyuzyirmi = miktar.amount2Text(2220);
        var ikibinikiyuz = miktar.amount2Text(2200);
        var ikibinyirmi = miktar.amount2Text(2020);

        chai.expect(ikibin).to.equal('ikibin');
        chai.expect(ikibiniki).to.equal('ikibiniki');
        chai.expect(ikibinyirmi).to.equal('ikibinyirmi');
        chai.expect(ikibinyirmiiki).to.equal('ikibinyirmiiki');
        chai.expect(ikibinikiyuzyirmiiki).to.equal('ikibinikiyüzyirmiiki');
        chai.expect(ikibinikiyuzyirmi).to.equal('ikibinikiyüzyirmi');
        chai.expect(ikibinikiyuz).to.equal('ikibinikiyüz');
    });

    it('should convert five digits', function () {
        var onbin = miktar.amount2Text(10000);
        chai.expect(onbin).to.equal('onbin');
        var onikibin = miktar.amount2Text(12000);
        chai.expect(onikibin).to.equal('onikibin');
        var yirmiucbindortyuzellibes = miktar.amount2Text(23455);
        chai.expect(yirmiucbindortyuzellibes).to.equal('yirmiüçbindörtyüzellibeş');
        var doksandokuzbindokuzyuzdoksan = miktar.amount2Text(99990);
        chai.expect(doksandokuzbindokuzyuzdoksan).to.equal('doksandokuzbindokuzyüzdoksan');
    });

    it('should convert six digits', function () {
        var yuzbin = miktar.amount2Text(100000);
        chai.expect(yuzbin).to.equal('yüzbin');

        var ikiyuzbin = miktar.amount2Text(200000);
        chai.expect(ikiyuzbin).to.equal('ikiyüzbin');
    });

    it('should convert seven digits', function () {
        var birmilyon = miktar.amount2Text(1000000);
        chai.expect(birmilyon).to.equal('birmilyon');

        var ikimilyon = miktar.amount2Text(2000000);
        chai.expect(ikimilyon).to.equal('ikimilyon');

        var ikimilyononuc = miktar.amount2Text(2000013);
        chai.expect(ikimilyononuc).to.equal('ikimilyononüç');

        var birmilyononbinyuz = miktar.amount2Text(1010100);
        chai.expect(birmilyononbinyuz).to.equal('birmilyononbinyüz');
    });

    it('should convert eight and nine digits', function () {
        var onmilyonikibindokuzyuzaltmisalti = miktar.amount2Text(10002966);
        chai.expect(onmilyonikibindokuzyuzaltmisalti).to.equal('onmilyonikibindokuzyüzaltmışaltı');
    });

    it('should convert nine digits and more', function(){
        var yuzyirmialtimilyarbirmilyonkirkdortbinbesyuzaltmis = miktar.amount2Text(126001044560);
        chai.expect(yuzyirmialtimilyarbirmilyonkirkdortbinbesyuzaltmis).to.equal('yüzyirmialtımilyarbirmilyonkırkdörtbinbeşyüzaltmış')
    });
});