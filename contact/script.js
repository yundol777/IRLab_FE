/* global kakao */
kakao.maps.load(function () {
  var container = document.querySelector('.contact__map');
  var options = {
    center: new kakao.maps.LatLng(36.736625, 127.073225), //지도의 중심좌표.
    level: 2, //지도의 레벨(확대, 축소 정도)
  };
  var map = new kakao.maps.Map(container, options);

  var imageSrc = '../src/assets/images/marker.png',
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(36.736625, 127.073225); // 마커가 표시될 위치입니다

  var marker = new kakao.maps.Marker({
    position: markerPosition,
    clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    image: markerImage,
  });

  marker.setMap(map);

  var mapTypeControl = new kakao.maps.MapTypeControl(); //일반지도, 스카이뷰 변환
  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

  var zoomControl = new kakao.maps.ZoomControl(); //지도 확대 축소 표시
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

  var iwContent = '<div class="iwContent">호서대학교 2공학관</div>', //마커 클릭 이벤트
    iwRemoveable = true;

  var infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });

  infowindow.open(map, marker);

  kakao.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
  });

  window.addEventListener('resize', function () {
    var markerPosition = marker.getPosition();
    map.relayout();
    map.setCenter(markerPosition);
  });
});
