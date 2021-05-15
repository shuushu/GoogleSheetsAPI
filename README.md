# google sheet api 연결 테스트

## client
1) https://www.npmjs.com/package/google-spreadsheet 설치
2) [코드 참조](https://github.com/shuushu/GoogleSheetsAPI/blob/3dd9d047c540a3fe2125fc4d4173943293f58b5c/src/container/Home.js#L10)

## GCP 설정 부분
1) GCP에서 google sheets api 생성
2) iam 및 관리자에서 키 발급


## 구글시트 권한 설정 종류
1) 모든 권한: 편집자 권한 설정, 특정 유저 설정(GCP에서 발급 받은 client_email) (CRUD)
2) 뷰어 권한 (Read)

