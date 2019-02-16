const Man = {
    address:'0x77eae2d7680f2af9c1d4b3aaa5fb59242bae1b08',
    passwd:'123456'
};

const scaddr = '0x5ce8c08b177ed7197c85d67f2c8cb6e0aa67a94e';

const abifilepath = '../sc/build/contracts';
const abifilename = 'TwoNumber.json';
const abifile= abifilepath + '/' + abifilename;

const blockchainurl='http://localhost:8545';

const keystorefilepath = '/home/hlf/Software/eth/data/keystore';
const keystorefilename = 'UTC--2019-02-15T06-11-25.915549355Z--77eae2d7680f2af9c1d4b3aaa5fb59242bae1b08';
const keystorefile = keystorefilepath + '/' + keystorefilename;

exports.Man = Man;
exports.abifile = abifile;
exports.keystorefile = keystorefile;
exports.blockchainurl = blockchainurl;
exports.scaddr = scaddr;