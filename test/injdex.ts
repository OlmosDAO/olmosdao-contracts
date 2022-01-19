import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

let OlmosDAOToken: any;
let TokenDai: any;
let PresaleERC20: any;

describe("#Deploy contracts", function () {
  it("Deploy contracts and saveIt", async function () {
    const [owner] = await ethers.getSigners();
    const _OlmosDAOToken = await ethers.getContractFactory("OlmosDAOToken");
    OlmosDAOToken = await _OlmosDAOToken.deploy();
    const _TokenDai = await ethers.getContractFactory("Dai");
    TokenDai = await _TokenDai.deploy(0);
    const _PresaleERC20 = await ethers.getContractFactory("PresaleERC20");
    PresaleERC20 = await _PresaleERC20.deploy(
      TokenDai.address,
      OlmosDAOToken.address
    );
    var ownerBalance = await OlmosDAOToken.balanceOf(owner.address);
    expect(await OlmosDAOToken.totalSupply()).to.equal(ownerBalance);
    await TokenDai.mint(owner.address, 800000);
    expect(await TokenDai.totalSupply()).to.equal(
      await TokenDai.balanceOf(owner.address)
    );
  });
});

describe("#Move Token to presale", function () {
  it("Move all tokens to presale contract", async function () {
    const [owner] = await ethers.getSigners();

    expect(await OlmosDAOToken.balanceOf(owner.address)).to.equal(
      await OlmosDAOToken.totalSupply()
    );

    await OlmosDAOToken.transfer(
      PresaleERC20.address,
      await OlmosDAOToken.balanceOf(owner.address)
    );

    expect(await OlmosDAOToken.totalSupply()).to.equal(
      await OlmosDAOToken.balanceOf(PresaleERC20.address)
    );
  });
});

describe("#Calculate Amount Tokens Purchased", function () {
  it("Buy tokens by Dai", async function () {
    const [owner] = await ethers.getSigners();

    // const delta = ethers.utils.parseUnits("0.01", 18).toNumber();

    const amount = await PresaleERC20.calculateAmountTokensPurchased(1);
    expect(amount).to.equal(105);
    // const amount2 = await PresaleERC20.calculateAmountTokensPurchased(0);
    // expect(amount2).to.equal(0);
    // console.log("amount2: " + amount2);

    // const amountBeforeSecondBuy = await TokenDai.balanceOf(owner.address);
    // const amount3 = await PresaleERC20.calculateAmountTokensPurchased(310000);
    // expect(amount3).to.equal(0);

    // const amountAfterSecondBuy = await TokenDai.balanceOf(owner.address);
    // expect(amountAfterSecondBuy).to.equal(amountBeforeSecondBuy);

    // console.log(await TokenDai.balanceOf(owner.address));

    // console.log("amount2: " + amount2);

    await TokenDai.connect(owner).approve(PresaleERC20.address, 800000);
    await PresaleERC20.buyToken(800000);
    expect(await OlmosDAOToken.balanceOf(owner.address)).to.equal(
      await OlmosDAOToken.totalSupply()
    );
    expect(await TokenDai.balanceOf(PresaleERC20.address)).to.equal(200000);
    expect(await OlmosDAOToken.balanceOf(PresaleERC20.address)).to.equal(0);
    expect(await TokenDai.balanceOf(owner.address)).to.equal(600000);

    // console.log(
    //   "TokenDai.balanceOf: " + (await TokenDai.balanceOf(PresaleERC20.address))
    // );
    // console.log(
    //   "OlmosDAOToken.balanceOf: " +
    //     (await OlmosDAOToken.balanceOf(PresaleERC20.address))
    // );
    // expect(await TokenDai.balanceOf(PresaleERC20.address)).to.equal(1);

    // const amountLeft = (await OlmosDAOToken.totalSupply()) - amount;
    // expect(await OlmosDAOToken.balanceOf(PresaleERC20.address)).to.equal(
    //   amountLeft
    // );

    // // 20990000;
    // console.log(await OlmosDAOToken.balanceOf(PresaleERC20.address));
    // console.log(await TokenDai.balanceOf(owner.address));
  });
});

describe("#Mercy", function () {
  it("Returns Dai for tokens buyed", async function () {
    const [owner] = await ethers.getSigners();
    await OlmosDAOToken.connect(owner).approve(
      PresaleERC20.address,
      await OlmosDAOToken.totalSupply()
    );
    await PresaleERC20.mercy();
    expect(await OlmosDAOToken.balanceOf(owner.address)).to.equal(0);
    expect(await TokenDai.balanceOf(owner.address)).to.equal(800000);
    expect(await TokenDai.balanceOf(PresaleERC20.address)).to.equal(0);
    expect(await OlmosDAOToken.balanceOf(PresaleERC20.address)).to.equal(
      21000000
    );
  });
});

describe("#moveTokensToTreasury", function () {
  it("Buy all Balance", async function () {
    const [owner] = await ethers.getSigners();
    await TokenDai.connect(owner).approve(PresaleERC20.address, 800000);
    await PresaleERC20.buyToken(800000);
    expect(await OlmosDAOToken.balanceOf(owner.address)).to.equal(
      await OlmosDAOToken.totalSupply()
    );
    expect(await TokenDai.balanceOf(PresaleERC20.address)).to.equal(200000);
    expect(await OlmosDAOToken.balanceOf(PresaleERC20.address)).to.equal(0);
    expect(await TokenDai.balanceOf(owner.address)).to.equal(600000);
  });

  it("goalPresale", async function () {
    expect(await PresaleERC20.goalPresale()).to.equal(true);
  });
});
