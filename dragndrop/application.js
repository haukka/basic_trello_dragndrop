$(document).ready(function(){
      
    $.curCSS = function (element, attrib, val) {
	$(element).css(attrib, val);
    };

    $("#containment").sortable();

    function init() {	
	$("#dragndrop_elem .sortable-list").sortable({
	    connectWith: '#dragndrop_elem .sortable-list',
	    containment: '#containment',
	    items: "> li:not(.btn_elem)"
	});
    }

    init();
    $("#containment").on('click', '.glyphicon-remove', function(){
	$(this).parent().remove();
    });

    $(".add_list").click(function(){
	var new_div = '<div class="col-md-4 sortable_div ui-sortable-handle">'
	    + '<ul class="sortable-list ui-sortable">'
	    + '</ul><button type="button" class="btn btn-success create_item">'
	    + '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Ajouter un item</button></div>';
	$(new_div).insertBefore(".clear");
	init();
    });
    
    $("#containment").on('click', '.create_item', function(){
	if ($(this).parents('ul').children().length > 1) {
	    $(this).parent().children('ul')
		.append('<li class="sortable-item">'
		       + 'ici'
		       + '<span class="glyphicon glyphicon-remove remove_button"></span>'
		       + '</li>');
	} else {
	    $(this).parent().children('ul')
		.append('<li class="sortable-item">'
			 + 'ici'
			 + '<span class="glyphicon glyphicon-remove remove_button"></span>'
			 + '</li>');
	}
    });
});
