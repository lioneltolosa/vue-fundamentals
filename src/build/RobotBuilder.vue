<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <div class="top part">
        <div class="robot-name">
          {{selectedRobot.head.title}}
          <span v-if="selectedRobot.head.onSale" class="sale">!Sale</span>
        </div>
        <img :src="selectedRobot.head.src" title="head" />
        <button @click="selectPrevHead()" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm" />
        <button @click="selectPrevLeftArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="left arm" />
        <button @click="selectPrevTorso()" class="prev-selector">&#9668;</button>
        <button @click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="left arm" />
        <button @click="selectPrevRightArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="left arm" />
        <button @click="selectPrevBases()" class="prev-selector">&#9668;</button>
        <button @click="selectNextBases()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <th>{{robot.head.title}}</th>
            <th>{{robot.cost}}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';

function getPreviousValidateIndex(index, lenght) {
  const deprecateIndex = index - 1;
  console.log('deprecateIndex', deprecateIndex);
  return deprecateIndex < 0 ? lenght - 1 : deprecateIndex;
}

function getNextValidIndex(index, lenght) {
  const incrementIndex = index + 1;
  console.log('lastIndex', incrementIndex);
  return incrementIndex > lenght - 1 ? 0 : incrementIndex;
}

export default {
  name: 'RobotBuilder',
  data() {
    return {
      cart: [],
      availableParts,
      selectHeadIndex: 0,
      selectArmLeftIndex: 0,
      selectArmRightIndex: 0,
      selectTorsoIndex: 0,
      selectBasesIndex: 0,
    };
  },
  computed: {
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectHeadIndex],
        leftArm: availableParts.arms[this.selectArmLeftIndex],
        torso: availableParts.torsos[this.selectTorsoIndex],
        rightArm: availableParts.arms[this.selectArmRightIndex],
        base: availableParts.bases[this.selectBasesIndex],
      };
    },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost
        + robot.leftArm.cost
        + robot.torso.cost
        + robot.rightArm.cost
        + robot.rightArm.cost
        + robot.base.cost;

      /* const x = [1, 2, 3, 4, 5];
      const [y, z] = x;
      console.log(y); // 1
      console.log(z); // 2 */

      // eslint-disable-next-line prefer-object-spread
      this.cart.push(Object.assign({}, robot, { cost }));

      console.log('Cart', this.cart);
    },
    selectNextHead() {
      this.selectHeadIndex = getNextValidIndex(
        this.selectHeadIndex,
        availableParts.heads.length,
      );
    },
    selectPrevHead() {
      this.selectHeadIndex = getPreviousValidateIndex(
        this.selectHeadIndex,
        availableParts.heads.length,
      );
    },
    selectPrevLeftArm() {
      this.selectArmLeftIndex = getNextValidIndex(
        this.selectArmLeftIndex,
        availableParts.arms.length,
      );
    },
    selectNextLeftArm() {
      this.selectArmLeftIndex = getNextValidIndex(
        this.selectArmLeftIndex,
        availableParts.arms.length,
      );
    },
    selectPrevTorso() {
      this.selectTorsoIndex = getNextValidIndex(
        this.selectTorsoIndex,
        availableParts.torsos.length,
      );
    },
    selectNextTorso() {
      this.selectTorsoIndex = getNextValidIndex(
        this.selectTorsoIndex,
        availableParts.torsos.length,
      );
    },
    selectPrevRightArm() {
      this.selectArmRightIndex = getNextValidIndex(
        this.selectArmRightIndex,
        availableParts.torsos.length,
      );
    },
    selectNextRightArm() {
      this.selectArmRightIndex = getNextValidIndex(
        this.selectArmRightIndex,
        availableParts.torsos.length,
      );
    },
    selectPrevBases() {
      this.selectBasesIndex = getNextValidIndex(
        this.selectBasesIndex,
        availableParts.bases.length,
      );
    },
    selectNextBases() {
      this.selectBasesIndex = getNextValidIndex(
        this.selectBasesIndex,
        availableParts.bases.length,
      );
    },
  },
};
</script>

<style scoped>
  .part {
      position: relative;
      width: 165px;
      height: 165px;
      border: 3px solid #aaa;
  }
  .part img {
      width: 165px;
  }
  .top-row {
      display: flex;
      justify-content: space-around;
  }
  .middle-row {
  display: flex;
  justify-content: center;
  }
  .bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
  }
  .head {
  border-bottom: none;
  }
  .left {
  border-right: none;
  }
  .right {
  border-left: none;
  }
  .left img {
  transform: rotate(-90deg);
  }
  .right img {
  transform: rotate(90deg);
  }
  .bottom {
  border-top: none;
  }
  .prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
  }
  .next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
  }
  .center .prev-selector,
  .center .next-selector {
  opacity: 0.8;
  }
  .left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
  }
  .left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
  }
  .right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
  }
  .right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
  }
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}
th, td {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}

</style>
