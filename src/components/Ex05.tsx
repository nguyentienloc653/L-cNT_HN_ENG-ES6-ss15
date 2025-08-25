import { Component } from "react";
import "./Ex05.css";

interface Student {
  id: string;
  name: string;
  dob: string;
  email: string;
  status: "active" | "inactive";
}

export default class Ex05 extends Component<object> {
  students: Student[] = [
    {
      id: "SV001",
      name: "Nguyễn Văn A",
      dob: "21/12/2023",
      email: "nva@gmail.com",
      status: "active",
    },
    {
      id: "SV002",
      name: "Nguyễn Thị B",
      dob: "21/11/2022",
      email: "ntb@gmail.com",
      status: "inactive",
    },
  ];

  render() {
    return (
      <div>
        {/* đầu */}

        <div className="student-manager">
          {/* Tiêu đề */}
          <h2 className="title">Quản lý sinh viên</h2>
          <div className="top-actions">
            <button className="btn-add">Thêm mới sinh viên</button>
          </div>
          <div className="filter-bar">
            <select>
              <option value="age">Sắp xếp theo tuổi</option>
              <option value="name">Sắp xếp theo tên</option>
            </select>
            <input
              type="text"
              placeholder="Tìm kiếm từ khóa theo tên hoặc email"
            />
          </div>

          {/* Bảng danh sách sinh viên */}
          <table className="student-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Ngày sinh</th>
                <th>Email</th>
                <th>Trạng thái</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>SV001</td>
                <td>Nguyễn Văn A</td>
                <td>21/12/2023</td>
                <td>nva@gmail.com</td>
                <td>
                  <span className="status active">Đang hoạt động</span>
                </td>
                <td>
                  <button className="btn small block">Chặn</button>
                  <button className="btn small edit">Sửa</button>
                  <button className="btn small delete">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>SV002</td>
                <td>Nguyễn Thị B</td>
                <td>21/11/2022</td>
                <td>ntb@gmail.com</td>
                <td>
                  <span className="status inactive">Ngừng hoạt động</span>
                </td>
                <td>
                  <button className="btn small block">Chặn</button>
                  <button className="btn small edit">Sửa</button>
                  <button className="btn small delete">Xóa</button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Phân trang */}
          <div className="pagination">
            <button>{"<"}</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>{">"}</button>
          </div>
        </div>
      </div>
    );
  }
}
