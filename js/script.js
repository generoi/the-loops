jQuery(function(a){var b=a("#loop-min-date, #loop-max-date").datepicker({changeMonth:!0,onSelect:function(c){var d=this.id=="loop-min-date"?"minDate":"maxDate",e=a(this).data("datepicker"),f=a.datepicker.parseDate(e.settings.dateFormat||a.datepicker._defaults.dateFormat,c,e.settings);b.not(this).datepicker("option",d,f)}});a(".tl-add-parameter").click(function(b){b.preventDefault();var c,d,e;c=a(this).parent(),d=c.siblings().length-1,e=c.next().clone().removeClass("hide-if-js").wrap("<div>").parent().html().replace(/{key}/gi,d),e=a(e),e.insertBefore(a(this)),e.find(".tl-tagsinput").tagsInput({height:"5em",width:"24em",defaultText:"add a value",delimiter:"\t"})}),a(".inside").on("click",".tl-delete",function(b){b.preventDefault(),a(this).parents(".tl-parameter").remove()}),a("#loop_orderby").change(function(){a(this).val()==="meta_value"||a(this).val()==="meta_value_num"?a(".tl_meta_key").removeClass("hide-if-js"):a(".tl_meta_key").addClass("hide-if-js")}),a("#loop_pagination").change(function(){a(this).val()==="none"?a(".tl_offset").removeClass("hide-if-js"):a(".tl_offset").addClass("hide-if-js")})});