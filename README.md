# CT240 - Project Management System

Ứng dụng quản lý công việc nhóm

## Tech Stack

- **Backend:** Spring Boot, MySQL
- **Frontend:** Vue.js, Bootstrap
- **Architecture:** Multi-layered (REST API)

## Cài đặt

### Backend

```bash
cd backend
mvnw spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Thành viên

| Tên                    | MSSV     | Vai trò   | GitHub                                            |
| :--------------------- | :------- | :-------- | :------------------------------------------------ |
| **Trần Trọng Phúc**    | B2303844 | Leader    | [@phuctran1501](https://github.com/phuctran1501/) |
| **Nguyễn Phước Lộc**   | B2303828 | Co-Leader | [@lexipit3268](https://github.com/lexipit3268)    |
| **Dương Hoàng Huynh**  | B2303815 | Member    | [@dev-dhhuynh](https://github.com/dev-dhhuynh)    |
| **Nguyễn Công Chức**   | B2303800 | Member    | [@chucino](https://github.com/chucino/)           |
| **Nguyễn Hoàng Khang** | B2303820 | Member    | [@KhangNH-123](https://github.com/KhangNH-123)    |
| **Võ Minh Nhựt**       | B2303839 | Member    | [@nhutit05](https://github.com/nhutit05)          |

## Giảng viên

TS. Trương Minh Thái

## TÓM TẮT CẤU TRÚC HOÀN CHỈNH

```
CT240_ProjectManagement/
├── backend/
│ ├── src/main/java/com/teamwork/backend/
│ │ ├── config/
│ │ ├── controller/
│ │ ├── service/
│ │ ├── repository/
│ │ ├── model/
│ │ ├── dto/
│ │ ├── exception/
│ │ ├── security/
│ │ └── util/
│ ├── src/main/resources/
│ │ └── application.properties
│ └── pom.xml
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── views/
│ │ ├── services/
│ │ ├── store/
│ │ ├── router/
│ │ └── main.js
│ └── package.json
│
├── docs/
│ ├── requirements/
│ ├── design/uml/
│ ├── testing/
│ └── reports/
│
├── .gitignore
└── README.md
```
