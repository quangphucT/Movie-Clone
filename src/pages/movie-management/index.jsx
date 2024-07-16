import { Form, Image, Input, Modal, Popconfirm, Table, Upload } from "antd";
import Button from "../../components/Button";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import uploadFile from "../../utils/upload";
const MovieManagement = () => {
  const fetchMovieData = async () => {
    const response = await axios.get(
      "https://662f3bdb43b6a7dce30ec40b.mockapi.io/Movie"
    );
    setDataSource(response.data);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
  const handleDeleteMovie = async (id) => {
    const response = await axios.delete(
      `https://662f3bdb43b6a7dce30ec40b.mockapi.io/Movie/${id}`
    );
    console.log(response);
    setDataSource(dataSource.filter((item) => item.id !== id));
  };
  const columns = [
    {
      title: "Movie name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Poster",
      dataIndex: "poster_path",
      key: "poster_path",
      render: (poster_path) => (
        <Image src={poster_path} width={200} style={{ borderRadius: "20px" }} />
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => handleDeleteMovie(id)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  {
    previewImage && (
      <Image
        wrapperStyle={{
          display: "none",
        }}
        preview={{
          visible: previewOpen,
          onVisibleChange: (visible) => setPreviewOpen(visible),
          afterOpenChange: (visible) => !visible && setPreviewImage(""),
        }}
        src={previewImage}
      />
    );
  }
  const [open, setOpen] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [form] = useForm();
  const handleOke = () => {
    form.submit();
  };
  const handleSubmit = async (values) => {
    const url = await uploadFile(values.poster_path.file.originFileObj);
    values.poster_path = url;
    axios.post("https://662f3bdb43b6a7dce30ec40b.mockapi.io/Movie", values);
    setDataSource([...dataSource, values]);
    form.resetFields();
    setOpen(false);
  };
  return (
    <div className="movie__manage">
      <Button onClick={() => setOpen(true)}>Add new movie</Button>
      <Table columns={columns} dataSource={dataSource} />
      <Modal
        onOk={handleOke}
        onCancel={() => setOpen(false)}
        title="Movie information"
        open={open}
      >
        <Form form={form} labelCol={{ span: 24 }} onFinish={handleSubmit}>
          <Form.Item label="Movie name" name={"name"}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name={"description"}>
            <TextArea rows={3} />
          </Form.Item>
          <Form.Item label="Trailer" name={"trailer"}>
            <Input />
          </Form.Item>
          <Form.Item label="Category" name={"category"}>
            <Input />
          </Form.Item>
          <Form.Item label="Poster" name={"poster_path"}>
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default MovieManagement;
