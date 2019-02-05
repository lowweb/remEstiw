$(function() {
    $("#rangeSelector").dxRangeSelector({
        size: {
            height: 70,
            width: 744
        },
        selectedRangeColor: "rgba(55, 63, 81, 0.4)",
        scale: {
            startValue: -30,
            endValue: +30,
            // minorTickInterval: 5,
            tickInterval: 10,
            // minorTick: {
                // visible: false,
            // },
            label: {
                // format: "currency",
                customizeText: function () {
                return this.valueText + " ˚C";
            	},
            	font: {
					color: "#373F51",
					family: "Lucida Grande, Tahoma, Arial",
					opacity: 1,
					size: 13,
					weight: 400
				}
            }
        },
        sliderMarker: {
            // format: "currency",
            color: "#373F51",
            customizeText: function () {
                return this.valueText + " ˚C";
            },
            font: {
				color: "#FFFFFF",
				family: "Lucida Grande, Tahoma, Arial",
				opacity: 1,
				size: 13,
				weight: 400
			},
           	invalidRangeColor: "red",
			paddingLeftRight: 10,
			paddingTopBottom: 2,
        },
        value: [4, 8],
        onInitialized: function () {      	
        	$( ".dx-visibility-change-handler" ).append( "<div class='rangeselector__back'></div>");
        }

    });
});