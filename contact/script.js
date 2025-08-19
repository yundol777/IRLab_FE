/* global kakao */
kakao.maps.load(function () {
  var container = document.querySelector('.contact__map');
  var options = {
    center: new kakao.maps.LatLng(36.736625, 127.073225), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };
  var map = new kakao.maps.Map(container, options);

  var markerPosition = new kakao.maps.LatLng(36.736625, 127.073225); //마커 표시
  var marker = new kakao.maps.Marker({
    position: markerPosition,
    clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
  });

  marker.setMap(map);

  var mapTypeControl = new kakao.maps.MapTypeControl(); //일반지도, 스카이뷰 변환
  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

  var zoomControl = new kakao.maps.ZoomControl(); //지도 확대 축소 표시
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

  var iwContent = '<div class="iwContent">Welcome.</div>', //마커 클릭 이벤트
    iwRemoveable = true;

  var infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });

  kakao.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
  });
});
