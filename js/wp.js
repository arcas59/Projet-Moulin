$(function() {
	
	$('.err').hide();
	
	$('[name=tel1], [name=tel2], [name=tel3], [name=by], [name=zip1], [name=zip2]').on('change click blur', function() {
		$(this).val(hankaku_num_only($(this).val()));
	});
	
	if (location.href.indexOf('contact/form') != -1) {

		$('input[value="確認画面へ"]').on('click', function() {

			$('.err').hide();

			if ($('[name=name1]').val() == '') {
				$('[name=name1]').closest('tr').find('.err').show();
			}

			if ($('[name=name2]').val() == '') {
				$('[name=name2]').closest('tr').find('.err').show();
			}

			if ($('[name=email1]').val() == '') {
				$('[name=email1]').closest('tr').find('.err').show();
			}

			if ($('[name=email1]').val() != $('[name=email2]').val()) {
				$('[name=email2]').closest('tr').find('.err').show();
			}

			if ($('[name=message]').val() == '') {
				$('[name=message]').closest('tr').find('.err').show();
			}

			if ($('.err:visible').length) {
				$('body, html').animate({scrollTop: $('.err:visible:first').closest('tr').offset().top - 100});
			} else {

				$('.table_type01:eq(1) th').each(function() {
					var str = '',
						td = $('.table_type01:eq(0) th:contains("' + $(this).text() + '"):first').next();

					if ($(this).text() == '連絡先電話番号') {
						str = $('input:eq(0)', td).val() != '' && $('input:eq(1)', td).val() != '' && $('input:eq(2)', td).val() != '' ? $('input:eq(0)', td).val() + '-' + $('input:eq(1)', td).val() + '-' + $('input:eq(2)', td).val() : '-';
					} else {
						if ($('input', td).length != 0) {

							str = $('input', td).val() != '' ? $('input', td).val() : '-';
						} else if ($('select', td).length != 0) {
							str = $('select', td).val();
						} else if ($('textarea', td).length != 0) {
							str = $('textarea', td).val().replace(/\n/g, '<br>');
						}

					}

					$(this).next().html(str);
				});

				$('.table_type01:eq(0), .app:eq(0)').hide();
				$('.table_type01:eq(1), .app:eq(1), .app:eq(2)').show();

				$('.table_type01:eq(0)').prev().hide();

				$('body, html').animate({scrollTop: $('.table_type01:eq(1)').offset().top - 100});

			}

			return false;
		});
		
	}
	
	if (location.href.indexOf('contact/media_form') != -1) {
        
        $('.table_type01:eq(0)').css({
           'margin-bottom' : 50 
        });
        
        $('.msg .contact_lead').css({
           'margin-bottom' : 10 
        });
        
        $('.msg .list_contact').css({
           'border-bottom' : 'none',
           'padding-bottom' : 70
        });

		$('input[value="確認画面へ"]').on('click', function() {

			$('.err').hide();
			
			if ($('[name=name3]').val() == '') {
				$('[name=name3]').closest('tr').find('.err').show();
			}

			if ($('[name=name4]').val() == '') {
				$('[name=name4]').closest('tr').find('.err').show();
			}


			if ($('[name=name1]').val() == '') {
				$('[name=name1]').closest('tr').find('.err').show();
			}

			if ($('[name=name2]').val() == '') {
				$('[name=name2]').closest('tr').find('.err').show();
			}
			
			if ($('[name=tel1]').val() == '' || $('[name=tel2]').val() == '' || $('[name=tel3]').val() == '') {
				$('[name=tel1]').closest('tr').find('.err').show();
			}

			if ($('[name=email1]').val() == '') {
				$('[name=email1]').closest('tr').find('.err').show();
			}

			if ($('[name=email1]').val() != $('[name=email2]').val()) {
				$('[name=email2]').closest('tr').find('.err').show();
			}

			if ($('[name=message]').val() == '') {
				$('[name=message]').closest('tr').find('.err').show();
			}

			if ($('.err:visible').length) {
				$('body, html').animate({scrollTop: $('.err:visible:first').closest('tr').offset().top - 100});
			} else {

				$('.table_type01:eq(1) th').each(function() {
					var str = '',
						td = $('.table_type01:eq(0) th:contains("' + $(this).text() + '"):first').next();

					if ($(this).text() == '連絡先電話番号') {
						str = $('input:eq(0)', td).val() != '' && $('input:eq(1)', td).val() != '' && $('input:eq(2)', td).val() != '' ? $('input:eq(0)', td).val() + '-' + $('input:eq(1)', td).val() + '-' + $('input:eq(2)', td).val() : '-';
					} else {
						if ($('input', td).length != 0) {

							str = $('input', td).val() != '' ? $('input', td).val() : '-';
						} else if ($('select', td).length != 0) {
							str = $('select', td).val();
						} else if ($('textarea', td).length != 0) {
							str = $('textarea', td).val().replace(/\n/g, '<br>');
						}

					}

					$(this).next().html(str);
				});
                
                $('.msg').hide();

				$('.table_type01:eq(0), .app:eq(0)').hide();
				$('.table_type01:eq(1), .app:eq(1), .app:eq(2)').show();

				$('.table_type01:eq(0)').prev().hide();

				$('body, html').animate({scrollTop: $('.table_type01:eq(1)').offset().top - 100});

			}

			return false;
		});
		
	}

	if (location.href.indexOf('recruit/form') != -1) {

		// 年月から月の最終日を設定
		$('[name=by], [name=bm]').on('change', function() {
			var dt = new Date($('[name=by]').val(), $('[name=bm]').val(), 0);
			var last_day = dt.getDate();

			$('[name=bd] option:lt(' + last_day + ')').show();
			$('[name=bd] option:gt(' + (last_day - 1) + ')').hide();

			//console.log($('[name=by]').val() + '/' + $('[name=bm]').val() + '/' + last_day);
		});
		
		$('label').on('click', function() {
			if ($(this).prev().prop('checked')) {
				$(this).prev().prop('checked', false);
			} else {
				$(this).prev().prop('checked', true);
			}
		});

		$('input[value="確認画面へ"]').on('click', function() {

			$('.err').hide();


			if ($('[name=name1]').val() == '') {
				$('[name=name1]').closest('tr').find('.err').show();
			}

			if ($('[name=name2]').val() == '') {
				$('[name=name2]').closest('tr').find('.err').show();
			}
			
			if ($('[name=tel1]').val() == '' || $('[name=tel2]').val() == '' || $('[name=tel3]').val() == '') {
				$('[name=tel1]').closest('tr').find('.err').show();
			}

			if ($('[name=sex]').length && $('[name=sex]:checked').val() == undefined) {
				$('[name=sex]').closest('tr').find('.err').show();
			}

			if ($('[name=email1]').val() == '') {
				$('[name=email1]').closest('tr').find('.err').show();
			}

			if ($('[name=email1]').val() != $('[name=email2]').val()) {
				$('[name=email2]').closest('tr').find('.err').show();
			}

			if ($('[name=question]').val() == '') {
				$('[name=question]').closest('tr').find('.err').show();
			}			

			if ($('.err:visible').length) {
				$('body, html').animate({scrollTop: $('.err:visible:first').closest('tr').offset().top - 100});
			} else {

				$('.table_type01:eq(1) th').each(function() {
					var str = '',
						td = $('.table_type01:eq(0) th:contains("' + $(this).text() + '"):first').next();

					if ($(this).text() == '氏名' || $(this).text() == 'フリガナ' || $(this).text() == 'メールアドレス') {
						str = $('input', td).val();
					} else if ($(this).text() == '生年月日') {
						str = $('select:eq(0)', td).val() + '年' + $('select:eq(1)', td).val() + '月' + $('select:eq(2)', td).val() + '日';
					} else if ($(this).text() == '性別') {
						str = $('[type=radio]:checked', td).length ? $('[type=radio]:checked', td).val() : '-';
					} else if ($(this).text() == '自宅最寄り駅') {
						str = $('input', td).val() != '' ? $('input', td).val() : '-';
					} else if ($(this).text() == '連絡先電話番号') {
						str = $('input:eq(0)', td).val() != '' && $('input:eq(1)', td).val() != '' && $('input:eq(2)', td).val() != '' ? $('input:eq(0)', td).val() + '-' + $('input:eq(1)', td).val() + '-' + $('input:eq(2)', td).val() : '-';
					} else if ($(this).text() == '勤務可能日・時間帯／質問等') {
						str = $('textarea', td).val() != '' ? $('textarea', td).val().replace(/\n/g, '<br>') : '-';
					}

					$(this).next().html(str);
				});

				$('.table_type01:eq(0), .app:eq(0)').hide();
				$('.table_type01:eq(1), .app:eq(1), .app:eq(2)').show();

				$('.table_type01:eq(0)').prev().hide();

				$('body, html').animate({scrollTop: $('.table_type01:eq(1)').offset().top - 100});

			}

			return false;
		});
		
	}
    
	if (location.href.indexOf('contact/eigyou_form') != -1) {

		$('input[value="確認画面へ"]').on('click', function() {

			$('.err').hide();
			
			if ($('[name=name4]').val() == '') {
				$('[name=name4]').closest('tr').find('.err').show();
			}

			if ($('[name=name1]').val() == '') {
				$('[name=name1]').closest('tr').find('.err').show();
			}

			if ($('[name=name2]').val() == '') {
				$('[name=name2]').closest('tr').find('.err').show();
			}
			
			if ($('[name=tel1]').val() == '' || $('[name=tel2]').val() == '' || $('[name=tel3]').val() == '') {
				$('[name=tel1]').closest('tr').find('.err').show();
			}

			if ($('[name=email1]').val() == '') {
				$('[name=email1]').closest('tr').find('.err').show();
			}

			if ($('[name=email1]').val() != $('[name=email2]').val()) {
				$('[name=email2]').closest('tr').find('.err').show();
			}

			if ($('[name=message]').val() == '') {
				$('[name=message]').closest('tr').find('.err').show();
			}

			if ($('.err:visible').length) {
				$('body, html').animate({scrollTop: $('.err:visible:first').closest('tr').offset().top - 100});
			} else {

				$('.table_type01:eq(1) th').each(function() {
					var str = '',
						td = $('.table_type01:eq(0) th:contains("' + $(this).text() + '"):first').next();

					if ($(this).text() == '電話番号') {
						str = $('input:eq(0)', td).val() != '' && $('input:eq(1)', td).val() != '' && $('input:eq(2)', td).val() != '' ? $('input:eq(0)', td).val() + '-' + $('input:eq(1)', td).val() + '-' + $('input:eq(2)', td).val() : '-';
					} else {
						if ($('input', td).length != 0) {
							str = $('input', td).val() != '' ? $('input', td).val() : '-';
						} else if ($('select', td).length != 0) {
							str = $('select', td).val();
						} else if ($('textarea', td).length != 0) {
							str = $('textarea', td).val().replace(/\n/g, '<br>');
						}
					}

					$(this).next().html(str);
				});

				$('.table_type01:eq(0), .app:eq(0)').hide();
				$('.table_type01:eq(1), .app:eq(1), .app:eq(2)').show();

				$('.table_type01:eq(0)').prev().hide();

				$('body, html').animate({scrollTop: $('.table_type01:eq(1)').offset().top - 100});

			}

			return false;
		});
		
	}
	
	if (location.href.indexOf('/brands/') != -1) {
	  $(window).on('hashchange', function() {
          
		  //console.log(this.location.hash);
		  if (this.location.hash.indexOf('tab') != -1) {
			  var tab_index = parseInt(this.location.hash.substr(4)) - 1;
			  
			  $('#leafNav li a.cr').removeClass('cr');
			  $('#leafNav li a').eq(tab_index).addClass('cr');
			  
			  $('section:lt(4)').hide();
			  $('section').eq(tab_index).show();
			  
			  $('.breadcrumbs li:eq(2)').text($('#leafNav li a.cr').text());
			  
			  $('body, html').animate({scrollTop:$('#leafNav').offset().top - 100});
			  //$('body, html').animate({scrollTop:0});
		  }
	  });
        
      if (location.hash.indexOf('tab') != -1) {
          //alert(this.location.hash);
          $(window).trigger('hashchange');
      }
	  
	  $('.clear').hide();
	  $('#areaNav a').on('click', function() {
		  var cur_area = '';
		  $('#areaNav a.cr').removeClass('cr');
		  if ($(this).parent().hasClass('clear')) {
			  $('.clear').hide();
		  } else {
			  $(this).addClass('cr');
			  $('.clear').show();
			  
			  cur_area = $(this).text();
			  $('#tab3 .shopbox').each(function() {
				  if (cur_area == $(this).data('area')) {
					  $(this).show();
				  } else {
					  $(this).hide();
				  }
			  });
		  }
		  return false;
	  });
	}
	
	
	
	$('input[value="戻る"]').on('click', function() {
		$('.table_type01:eq(0), .app:eq(0)').show();
		$('.table_type01:eq(1), .app:eq(1), .app:eq(2)').hide();
		
		$('.table_type01:eq(0)').prev().show();
        
        if (location.href.indexOf('contact/media_form') != -1) $('.msg').show();
		
		$('body, html').animate({scrollTop: $('.table_type01:eq(0)').offset().top - 100});
		
		return false;
	});
	
	if (location.href.indexOf('/company/') != -1) {
        $(window).off('load hashchange').on('load hashchange', function() {
            //console.log(this.location.hash);
            if (this.location.hash.indexOf('block') != -1) {
                var h = $('header').outerHeight();
                $('body, html').animate({scrollTop:$(this.location.hash).offset().top - 170});
            }
        });
    }
});

function hankaku(t) {
	return (t + '').replace(/[！-～]/g, function(s) {
	return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
	});
}

function hankaku_num_only(t) {
	return (hankaku(t)).replace(/[^0-9]/g, '');
}

function numberAndHyphen(t) {
	return (hankaku(t)).replace(/[ー－―～＿]+/g, '-').replace(/[^0-9\-]/g, '');
}
