JORSH = window.JORSH or= {}

JORSH.Index = (()->
	life = {}
	counter = 0
	interval = {}
	animateDelay = 100
	
	resetGrid = ()->
		life = new JORSH.Life()
		life.reset()
		life.buildTestGrid()
		generateVisualGrid()

	generateVisualGrid = ()->
		content = $("<div id=\"grid\" />")
		for row in [life.rows..0]
			for column in [life.columns..0]
				isAlive = (life.grid[column][row] == 1)
				cell = $("<span />")
				if isAlive
					cell.addClass "alive"
				else
					cell.addClass "dead"
				content.prepend cell

		$("#grid_section").html content

	build = ()->
		resetGrid()
		$("#reset").on "click", reset_clicked
		$("#advance").on "click", advance_clicked
		$("#animate").on "click", animate_clicked

	reset_clicked = ()->
		resetGrid()

	advance_clicked = ()->
		life.runCycle()
		generateVisualGrid()

	animate_clicked = ()->
		counter = 0
		clearInterval(interval)
		interval = setInterval animateInterval, animateDelay

	animateInterval = ()->
		counter++
		advance_clicked()
		if counter > 13
			clearInterval interval

	return{
		init: ()->
			$(document).ready build
	}

)().init()