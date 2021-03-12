export const INITIAL_STATE_DATA = {
  nodeDataArray: [
    {
      key: 0,
      layer: "start",
      value: "start",
      fill: "black",
      color: "white",
      loc: "0 0",
      category: "Start",
    },
    {
      key: 1,
      layer: "size",
      value: "s",
      text: "ขนาด\nเล็ก",
      fill: "Grey",
      color: "white",
      loc: "200 -150",
    },
    {
      key: 2,
      layer: "size",
      value: "l",
      text: "ขนาด\nใหญ่",
      fill: "Grey",
      color: "white",
      loc: "200 150",
    },
    {
      key: 3,
      layer: "topping1",
      value: "brownie",
      text: "บราวนี่",
      fill: "GoldenRod",
      color: "white",
      loc: "450 -320",
    },
    {
      key: 4,
      layer: "topping1",
      value: "banana",
      text: "กล้วย",
      fill: "GoldenRod",
      color: "white",
      loc: "450 -200",
    },
    {
      key: 5,
      layer: "topping1",
      value: "cereal",
      text: "คอนเฟรค",
      fill: "GoldenRod",
      color: "white",
      loc: "450 -80",
    },
    {
      key: 6,
      layer: "topping2",
      value: "brownie",
      text: "บราวนี่",
      fill: "GoldenRod",
      color: "white",
      loc: "450 80",
    },
    {
      key: 7,
      layer: "topping2",
      value: "banana",
      text: "กล้วย",
      fill: "GoldenRod",
      color: "white",
      loc: "450 200",
    },
    {
      key: 8,
      layer: "topping2",
      value: "cereal",
      text: "คอนเฟรค",
      fill: "GoldenRod",
      color: "white",
      loc: "450 320",
    },
    {
      key: 9,
      layer: "sweetness",
      value: "lessSugar",
      text: "ขนาดเล็ก\nบราวนี่\nใส่นม",
      fill: "SaddleBrown",
      color: "white",
      loc: "700 -320",
    },
    {
      key: 10,
      layer: "sweetness",
      value: "extraSugar",
      text: "ขนาดเล็ก\nกล้วย\nใส่นม",
      fill: "SaddleBrown",
      color: "white",
      loc: "700 -200",
    },
    {
      key: 11,
      layer: "sweetness",
      value: "extraSugar",
      text: "ขนาดเล็ก\nคอนเฟรค\nใส่นม",
      fill: "SaddleBrown",
      color: "white",
      loc: "700 -80",
    },
    {
      key: 12,
      layer: "sweetness",
      value: "lessSugar",
      text: "ขนาดใหญ่\nบราวนี่\nใส่นม",
      fill: "SaddleBrown",
      color: "white",
      loc: "700 80",
    },
    {
      key: 13,
      layer: "sweetness",
      value: "extraSugar",
      text: "ขนาดใหญ่\nกล้วย\nใส่นม",
      fill: "SaddleBrown",
      color: "white",
      loc: "700 200",
    },
    {
      key: 14,
      layer: "sweetness",
      value: "extraSugar",
      text: "ขนาดเล็ก\nคอนเฟรค\nใส่นม",
      fill: "SaddleBrown",
      color: "white",
      loc: "700 320",
    },
    {
      key: 15,
      layer: "end",
      value: "end",
      fill: "black",
      color: "white",
      loc: "900 0",
      category: "End",
    },
    {
      key: 16,
      layer: "trap",
      value: "Tarpstate",
      text: "trapstate",
      fill: "black",
      color: "white",
      loc: "1100 0",
    },
  ],
  linkDataArray: [
    //layer 1 start -> size
    { key: -1, from: 0, to: 1, color: "green", zOrder: 2 },
    { key: -2, from: 0, to: 2, color: "#fff281", zOrder: 1 },
    //Layer 1 -> Layer 1
    { key: -3, from: 1, to: 2, color: "#fff281", zOrder: 1 },
    { key: -4, from: 2, to: 1, color: "#fff281", zOrder: 1 },
    //Layer 1 -> Layer 2
    { key: -5, from: 1, to: 3, color: "#fff281", zOrder: 1 },
    { key: -6, from: 1, to: 4, color: "#fff281", zOrder: 1 },
    { key: -7, from: 1, to: 5, color: "#fff281", zOrder: 1 },

    { key: -8, from: 2, to: 6, color: "#fff281", zOrder: 1 },
    { key: -9, from: 2, to: 7, color: "#fff281", zOrder: 1 },
    { key: -10, from: 2, to: 8, color: "#fff281", zOrder: 1 },
    //Loop Layer1
    { key: -11, from: 1, to: 1, color: "#fff281", zOrder: 1 },
    { key: -12, from: 2, to: 2, color: "#fff281", zOrder: 1 },
    //Layer 2 -> Layer 2
    { key: -13, from: 3, to: 4, color: "#fff281", zOrder: 1 },
    { key: -14, from: 3, to: 5, color: "#fff281", zOrder: 1 },

    { key: -15, from: 4, to: 3, color: "#fff281", zOrder: 1 },
    { key: -16, from: 4, to: 5, color: "#fff281", zOrder: 1 },

    { key: -17, from: 5, to: 3, color: "#fff281", zOrder: 1 },
    { key: -18, from: 5, to: 4, color: "#fff281", zOrder: 1 },

    { key: -19, from: 6, to: 7, color: "#fff281", zOrder: 1 },
    { key: -20, from: 6, to: 8, color: "#fff281", zOrder: 1 },

    { key: -21, from: 7, to: 6, color: "#fff281", zOrder: 1 },
    { key: -22, from: 7, to: 8, color: "#fff281", zOrder: 1 },

    { key: -23, from: 8, to: 6, color: "#fff281", zOrder: 1 },
    { key: -24, from: 8, to: 7, color: "#fff281", zOrder: 1 },
    //Layer 2 -> Layer 1
    { key: -25, from: 3, to: 1, color: "#fff281", zOrder: 1 },
    { key: -26, from: 4, to: 1, color: "#fff281", zOrder: 1 },
    { key: -27, from: 5, to: 1, color: "#fff281", zOrder: 1 },

    { key: -28, from: 6, to: 2, color: "#fff281", zOrder: 1 },
    { key: -29, from: 7, to: 2, color: "#fff281", zOrder: 1 },
    { key: -30, from: 8, to: 2, color: "#fff281", zOrder: 1 },
    //Loop Layer 2
    { key: -31, from: 3, to: 3, color: "#fff281", zOrder: 1 },
    { key: -32, from: 4, to: 4, color: "#fff281", zOrder: 1 },
    { key: -33, from: 5, to: 5, color: "#fff281", zOrder: 1 },

    { key: -34, from: 6, to: 6, color: "#fff281", zOrder: 1 },
    { key: -35, from: 7, to: 7, color: "#fff281", zOrder: 1 },
    { key: -36, from: 8, to: 8, color: "#fff281", zOrder: 1 },
    //Layer 2 -> Layer 3
    { key: -37, from: 3, to: 9, color: "#fff281", zOrder: 1 },
    { key: -38, from: 4, to: 10, color: "#fff281", zOrder: 1 },
    { key: -39, from: 5, to: 11, color: "#fff281", zOrder: 1 },

    { key: -40, from: 6, to: 12, color: "#fff281", zOrder: 1 },
    { key: -41, from: 7, to: 13, color: "#fff281", zOrder: 1 },
    { key: -42, from: 8, to: 14, color: "#fff281", zOrder: 1 },
    //Layer 3 -> Layer 2
    { key: -43, from: 9, to: 3, color: "#fff281", zOrder: 1 },
    { key: -44, from: 10, to: 4, color: "#fff281", zOrder: 1 },
    { key: -45, from: 11, to: 5, color: "#fff281", zOrder: 1 },

    { key: -46, from: 12, to: 6, color: "#fff281", zOrder: 1 },
    { key: -47, from: 13, to: 7, color: "#fff281", zOrder: 1 },
    { key: -48, from: 14, to: 8, color: "#fff281", zOrder: 1 },
    //Layer 2 -> Layer 4
    { key: -49, from: 3, to: 15, color: "#fff281", zOrder: 1 },
    { key: -50, from: 4, to: 15, color: "#fff281", zOrder: 1 },
    { key: -51, from: 5, to: 15, color: "#fff281", zOrder: 1 },

    { key: -52, from: 6, to: 15, color: "#fff281", zOrder: 1 },
    { key: -53, from: 7, to: 15, color: "#fff281", zOrder: 1 },
    { key: -54, from: 8, to: 15, color: "#fff281", zOrder: 1 },
    //Reset State
    { key: -55, from: 1, to: 0, color: "#fff281", zOrder: 1 },
    { key: -56, from: 2, to: 0, color: "#fff281", zOrder: 1 },
    { key: -57, from: 3, to: 0, color: "#fff281", zOrder: 1 },
    { key: -58, from: 4, to: 0, color: "#fff281", zOrder: 1 },
    { key: -59, from: 5, to: 0, color: "#fff281", zOrder: 1 },
    { key: -60, from: 6, to: 0, color: "#fff281", zOrder: 1 },
    { key: -61, from: 7, to: 0, color: "#fff281", zOrder: 1 },
    { key: -62, from: 8, to: 0, color: "#fff281", zOrder: 1 },
    { key: -63, from: 9, to: 0, color: "#fff281", zOrder: 1 },
    { key: -64, from: 10, to: 0, color: "#fff281", zOrder: 1 },
    { key: -65, from: 11, to: 0, color: "#fff281", zOrder: 1 },
    { key: -66, from: 12, to: 0, color: "#fff281", zOrder: 1 },
    { key: -67, from: 13, to: 0, color: "#fff281", zOrder: 1 },
    { key: -68, from: 14, to: 0, color: "#fff281", zOrder: 1 },
    { key: -69, from: 15, to: 0, color: "#fff281", zOrder: 1 },
    //LayerTrap
    { key: -70, from: 15, to: 16, color: "#fff281", zOrder: 1 },
    { key: -71, from: 16, to: 16, color: "#fff281", zOrder: 1 },
  ],
}
