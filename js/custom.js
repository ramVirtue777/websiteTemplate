jQuery(document).ready(function($) {
	// console.log("Script Works...");

	//  Row Create
	jQuery('.row_box').draggable({
		revert: 'invalid',
		cursor: 'move',
		cursorAt: { top: 40, right: 20 },
		stop: function() {
			jQuery(this).remove();
			// jQuery('.draggable_contents').append(heading_1);
		}
	});
	jQuery('.tag_1').droppable({
		accept: '.row_box',
		drop: function() {
			jQuery(this).append("<div class='sc_row'></div>");
			col_trigger();
			draggable_elements();
		}
	});

	// Column create
	function col_trigger() {
		jQuery('.sc_row').droppable({
			greedy: true,
			accept: [ '.column_box', '.heading_box' ],
			drop: function() {
				console.log(jQuery(this));
				jQuery(this).append("<div class='sc_column'></div>");
				elements_heading();
			}
		});
	}

	function elements_heading() {
		// Heading -> Column Droppable
		jQuery('.sc_column').droppable({
			greedy: true,
			accept: '.heading_box',
			drop: function() {
				jQuery(this).append("<input type='text' data-heading='H1' placeholder='Heading 1' class='heading_1'>");
				// jQuery('.heading_1').focus();
				draggable_elements();
			}
		});
	}

	function draggable_elements() {
		// All draggable elements
		jQuery('.heading_box').draggable({
			revert: 'invalid',
			cursor: 'move',
			cursorAt: { top: 40, right: 30 },
			stop: function() {
				jQuery(this).remove();
			}
		});

		jQuery('.row_box').draggable({
			revert: 'invalid',
			cursor: 'move',
			cursorAt: { top: 40, right: 20 },
			stop: function() {
				jQuery(this).remove();
				// jQuery('.draggable_contents').append(heading_1);
			}
		});
		jQuery('.column_box').draggable({
			revert: 'invalid',
			cursor: 'move',
			cursorAt: { top: 40, right: 20 },
			stop: function() {
				jQuery(this).remove();
			}
		});
	}
});
