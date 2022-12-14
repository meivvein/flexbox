const place = document.querySelector("#wrapper");
place.style.display="flex";

const f = document.querySelector("#displayFlex");
f.addEventListener('change', function(){
    if (f.checked == true) {
        place.style.display="flex";
    }
    else {
        place.style.display="block";
    }
})
// Flex direction
document.querySelector("#flexDirectionRow").addEventListener('change', function(){
    place.style.flexDirection="row";
})
document.querySelector("#flexDirectionColumn").addEventListener('change', function(){
    place.style.flexDirection="column";
})
document.querySelector("#flexDirectionRowReverse").addEventListener('change', function(){
    place.style.flexDirection="row-reverse";
})
document.querySelector("#flexDirectionColumnReverse").addEventListener('change', function(){
    place.style.flexDirection="column-reverse";
})

// Flex wrap
document.querySelector("#flexWrapNowrap").addEventListener('change', function(){
    place.style.flexWrap="nowrap";
})
document.querySelector("#flexWrapWrap").addEventListener('change', function(){
    place.style.flexWrap="wrap";
})
document.querySelector("#flexWrapWrapReverse").addEventListener('change', function(){
    place.style.flexWrap="wrap-reverse";
})

// Justify Content

document.querySelector("#justifyContentFlexStart").addEventListener('change', function(){
    place.style.justifyContent="flex-start";
})
document.querySelector("#justifyContentFlexEnd").addEventListener('change', function(){
    place.style.justifyContent="flex-end";
})
document.querySelector("#justifyContentCenter").addEventListener('change', function(){
    place.style.justifyContent="center";
})
document.querySelector("#justifyContentSpaceBetween").addEventListener('change', function(){
    place.style.justifyContent="space-between";
})
document.querySelector("#justifyContentSpaceAround").addEventListener('change', function(){
    place.style.justifyContent="space-around";
})
document.querySelector("#justifyContentSpaceEvenly").addEventListener('change', function(){
    place.style.justifyContent="space-evenly";
})

// Align items

document.querySelector("#alignItemsFlexStart").addEventListener('change', function(){
    place.style.alignItems="flex-start";
})
document.querySelector("#alignItemsFlexEnd").addEventListener('change', function(){
    place.style.alignItems="flex-end";
})
document.querySelector("#alignItemsCenter").addEventListener('change', function(){
    place.style.alignItems="center";
})
document.querySelector("#alignItemsStretch").addEventListener('change', function(){
    place.style.alignItems="stretch";
})
document.querySelector("#alignItemsBaseline").addEventListener('change', function(){
    place.style.alignItems="baseline";
})

// Align content
document.querySelector("#AlignContentFlexStart").addEventListener('change', function(){
    place.style.alignContent="flex-start";
})
document.querySelector("#AlignContentFlexEnd").addEventListener('change', function(){
    place.style.alignContent="flex-end";
})
document.querySelector("#AlignContentCenter").addEventListener('change', function(){
    place.style.alignContent="center";
})
document.querySelector("#AlignContentStretch").addEventListener('change', function(){
    place.style.alignContent="stretch";
})
document.querySelector("#AlignContentSpaceBetween").addEventListener('change', function(){
    place.style.alignContent="space-between";
})
document.querySelector("#AlignContentSpaceAround").addEventListener('change', function(){
    place.style.alignContent="space-around";
})
document.querySelector("#AlignContentSpaceEvenly").addEventListener('change', function(){
    place.style.alignContent="space-evenly";
})

// Gap
const gap = document.querySelector("#Gap");
const gapValue = document.querySelector("#GapValue");
gap.addEventListener('change', function(){
    if (gap.checked == true) {
        gapValue.disabled=false;
        place.style.gap=gapValue.value;
    }
    else {
        gapValue.disabled=true;
        place.style.gap=0
    }
})
gapValue.addEventListener('input', function(){
    if (gap.checked == true) {
        place.style.gap=gapValue.value;
    }
})

window.addEventListener("load", function() {
    document.querySelector("#flexDirectionRow").click()
    document.querySelector("#flexWrapNowrap").click()
    document.querySelector("#justifyContentFlexStart").click()
    document.querySelector("#alignItemsStretch").click()
    document.querySelector("#AlignContentStretch").click()
})