import React from "react";
import { Avatar, Modal } from "antd";
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// import "react-quill/dist/quill.snow.css";
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";
const PostForm = ({
  content,
  setContent,
  postSubmit,
  title,
  setTitle,
  date,
  setDate,
  time,
  setTime,
  place,
  setPlace,
  ok,
  setok,
  handleImage,
  uploading,
  image,
  edit,
}) => {
  return (
    <div>
      {edit !== "edit" && (
        <Modal
          className=""
          title="Create Event"
          visible={ok}
          onCancel={() => setok(false)}
          footer={null}
        >
          <div className="my-2">
            <form className="form-group">
              <div className="mb-1">
                <label>Event Name</label>
                <input
                  className="form-control"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Event Name"
                />
              </div>
              <div className="my-1">
                <label htmlFor="">Description</label>
                <textarea
                  className="form-control"
                  type="text"
                  rows={5}
                  cols={5}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Description"
                />
              </div>
              <div>
                <label>Place</label>
                <input
                  className="form-control"
                  type="text"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder="Place"
                />
              </div>
              <div className="d-flex ">
                <div className="my-1">
                  <label>Date</label>
                  <input
                    className="form-control mx-2"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date"
                  />
                </div>

                <div className="my-1">
                  <label>Time</label>
                  <input
                    className="form-control mx-2"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Time"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer d-flex justify-content-between text-muted">
            <button
              disabled={!content || !title || !date || !time}
              onClick={postSubmit}
              className="btn btn-primary btn-sm mt-1"
            >
              Post
            </button>
            <label>
            {image && image.url ? (
                <Avatar size={35} src={image.url} className="mt-1 h5" />
              ) : uploading ? (
                <LoadingOutlined size={35} className="mt-2 fs-3" />
              ) : (
                <CameraOutlined
                  size={35}
                  className="mt-2 fs-3"
                  style={{ cursor: "pointer" }}
                />
              )}
              <input
                onChange={handleImage}
                type="file"
                accept="images/*"
                hidden
              />
            </label>
          </div>
        </Modal>
      )}
      {edit == "edit" && (
        <>
          <div className="card  my-2 py-3 border-bottom-0 border  rounded-2  px-3 ">
            <form className="form-group">
              <label>Job Title</label>
              <input
                className="form-control"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job Title"
              />
              <ReactQuill
                theme="snow"
                value={content}
                onChange={(e) => setContent(e)}
                className="form-control "
                placeholder="Write something.."
              />
            </form>
          </div>
          <div className="card-footer d-flex justify-content-between text-muted">
            <button
              disabled={!content || !title}
              onClick={postSubmit}
              className="btn btn-primary btn-sm "
            >
              Post
            </button>
            <label>
              {image && image.url ? (
                <Avatar size={35} src={image.url} className="" />
              ) : uploading ? (
                <LoadingOutlined size={35} className="mt-2" />
              ) : (
                <CameraOutlined
                  name="Upload Cover"
                  size={35}
                  className="mt-2"
                  style={{ cursor: "pointer" }}
                />
              )}
              <input
                onChange={handleImage}
                name="Upload Cover"
                type="file"
                accept="images/*"
                hidden
              />
            </label>
          </div>
        </>
      )}
    </div>
  );
};

export default PostForm;
