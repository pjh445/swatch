$(document).ready(function(){
        	
						//[봄,여름,가을,겨울] 각 섹션
            const elm = $("main>section");
			
            $(elm).each(function (index) {
							
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();//데스크탑 브라우저에서 에러 없애기
                    let delta = 0;                   
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } 
                    else if (event.detail){
                        delta = -event.detail / 3;
					}
										
					//스크롤바의 윗쪽 Y위치
                    let moveTop = $(window).scrollTop();
										
					//[0,1,2,3] 봄,여름,가을,겨울 섹션
                    let elmSelecter = elm.eq(index); 
										
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(elmSelecter).next() != undefined) {	
							//offset()은 문서(or 윈도)를 기준으로한 좌표
							//부모를 기준으로 한 좌표는?  position()
							 moveTop = $(elmSelecter).next().offset().top; 
                        }
												
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(elmSelecter).prev() != undefined) {
							moveTop = $(elmSelecter).prev().offset().top;
						}
                    }
                     /* 예시 moveTop값 (모니터 높이 700픽셀일때)
					 봄:   0
					 여름: 700
					 가을: 1400
					 겨울: 2100
					 */
                    // 화면이동 0.2초(200)
                    $("html,body").stop().animate({
							scrollTop: moveTop
					},200);
                });
            });
            
            
}); //////////////all end