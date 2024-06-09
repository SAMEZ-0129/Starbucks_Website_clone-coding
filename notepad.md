# 스타벅스 크론 코딩 실습

기본적인 아이콘 및 이미지를 가져와서 index 파일 생성. 

1. 별도의 브라우저 아이콘을 설정하지 않았는데, 스타벅스 아이콘으 탭에 뜰 수 있는 이유는:
브라우저는 기본적으로 루트 경로에 있는 favicon.ico 파일이 있으면 해당 파일을 탭의 아이콘으로 사용함.

2. 별도의 png파일같이 고해상도 아이콘을 사용하고 싶은 경우 link 태그를 통해 rel을 icon으로 지정해서 파일 지정하면 된다.

## 오픈 그래프 (The Open Graph protocol)
웹페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보를 지정.
![오픈그래프의 예시](image.png)

공유되는 링크에 대한 기본적인 메타정보를 요약해서 보여주는 방식.

![오픈그래프 코드 예시](image-1.png)

meta 태그를 이용해서 위와 같은 다양한 정보를 제공할 수 있음.

## 트위터 카드
오픈 그래프와 유사하지만 트위터에서 만든 방식.

오픈그래프나 트위터 카드에 사용하는 SEO이미지를 의미함(구분)

![SEO 설명](image-2.png)