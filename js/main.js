const svgWidth = 1000;
const svgHeight = 1000;
const wallWidth = 500;
const wallHeight = 1000;
const doorWidth = svgWidth - wallWidth;
const doorHeight = 1000;
const xPosition = 100;

let svg = d3.select("body").append("svg")
    .attr("width", svgWidth).attr("height", svgHeight);
let doorGroup = svg.append("g");
let wallGroupSVG = svg.append("g").attr("transform", "translate(" + doorWidth + ",0)");
let wallGroupDiv = d3.select("body").append("g");
let controlOverlayDiv = d3.select("body").append("div")
    .attr("class", "overlay")
    .text("Hi");

wallGroupSVG.append("rect")
    .attr("width", wallWidth)
    .attr("height", wallHeight)
    .attr("fill", "#f1f1f1")

let background = wallGroupSVG.append('image')
    .attr('xlink:href', 'images/background.jpg')
    .attr('width', 200)
    .attr('height', 400)
.attr("transform", "translate(100, 300)");


controlGroup.append("div").attr("class", "inner").append("p");