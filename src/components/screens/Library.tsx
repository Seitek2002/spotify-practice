import {
  Dropdown,
  Flex,
  MenuProps,
  Row,
  Space,
  Table,
  TableProps,
  Typography,
} from "antd";
import {
  FieldTimeOutlined,
  DownOutlined,
  SearchOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const Library = () => {
  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  interface IDataType {
    id: string;
    url: string;
    name_of_song: string;
    author: string;
    album: string;
    is_favorite: boolean;
    duration: string;
  }
  
  const columns: TableProps<IDataType>["columns"] = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      width: "30px",
     
    },
    {
      title: "TITLE",
      dataIndex: "name_of_song",
      key: "name_of_song",
      render: (_, record) => {
        return (
          <Flex gap="middle" align="center">
            <img
              style={{ width: "52px", height: "52px" }}
              src={record.url}
              alt=""
            />
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "450",
                  lineHeight: "25px",
                  letterSpacing: "0.01em",
                  textAlign: "left",
                  color: "#fff",
                  margin: "0"
                }}
              >
                {record.name_of_song}
              </p>{" "}
              <p style={{margin: "0"}}>{record.author}</p>{" "}
            </div>
          </Flex>
        );
      },
    },
    {
      title: "ALBUM",
      dataIndex: "album",
      key: "album",
      
    },
    {
      title: "DATE ADDED",
      dataIndex: "dateAdded",
      key: "dateAdded",
    },
    {
      title: "",
      dataIndex: "is_favorite",
      key: "isFavorite",
      render: (value) =>{
        return value && <HeartOutlined />
      },
    },
    {
      title: <FieldTimeOutlined />,
      dataIndex: "duration",
      key: "duration ",
      width: "80px"
    },
  ];

  const data: IDataType[] = [
    {
      id: "1",
      url: "/assets/library.png",
      name_of_song: "Play It Safe",
      author: "Julia Wolf",
      album: "Play It Safe",
      is_favorite: true,
      duration: "2 : 12",
    },
  ];

  return (
    <div style={{ marginTop: "40px" }} className="library">
      <Flex gap="middle">
        <img src="/assets/library.png" alt="" />
        <Row>
          <Flex gap="middle" justify="end" vertical>
            <Typography.Text className="library_status">
              PUBLIC PLAYLIST
            </Typography.Text>

            <Typography.Text className="library_genre">Pop Mix</Typography.Text>

            <Typography.Text className="library_artists">
              Hey Violet, VÉRITÉ, Timeflies and more
            </Typography.Text>

            <Typography.Text className="library_davedirect">
              Made for davedirect3 34 songs, 2hr 01 min
            </Typography.Text>
          </Flex>
        </Row>
      </Flex>
      <Flex
        style={{ padding: "60px 0" }}
        justify="flex-end"
        align="center"
        gap="middle"
      >
        <SearchOutlined style={{ color: "white", fontSize: "20px" }} />
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <Space style={{ color: "white", fontSize: "15px" }}>
            Custom order
            <DownOutlined />
          </Space>
        </Dropdown>
      </Flex>
      <Table
        className="library_table"
        style={{ background: " #904b88" }}
        dataSource={data}
        columns={columns}
        pagination={false}
      />
      ;
    </div>
  );
};

export default Library;
