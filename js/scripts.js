var $P;
$(".more").click(function(e) {
	e.preventDefault();
	$P = this.id;
	$P = $P.substring(1, $P.length);
	$(".P" + $P + " .short").hide();
	$(".P" + $P + " .more").hide();
	$(".P" + $P + " .long").show();
	$(".P" + $P + " .less").show();
	$(".P" + $P + " .skills_div").css({"display": "flex"});
});

$(".less").click(function(e) {
	e.preventDefault();
	$P = this.id;
	$P = $P.substring(1, $P.length);
	$(".P" + $P + " .long").hide();
	$(".P" + $P + " .less").hide();
	$(".P" + $P + " .short").show();
	$(".P" + $P + " .more").show();
	$(".P" + $P + " .skills_div").css({"display": "none"});
});

var chosenSkill = "show_all";
function updateSkill() {
	if (chosenSkill === "show_all") {
		$(".project").show();
	} else {
		for (var i = 0; i < 20; i++) {
			if ($(".P" + i +" ." + chosenSkill).length === 0) {
				$(".P" + i).hide();
			} else {
				$(".P" + i).show();
			}
		}
	}
}

$(".skill_selector").change(function(e) {
	chosenSkill = $(".skill_selector")[0].value;
	updateSkill();
});