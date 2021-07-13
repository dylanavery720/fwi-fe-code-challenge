import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Form, Input, InputNumber, Select } from 'antd';
import { openCreatePlayerModal } from '../appState/actions';
import { useDispatch } from 'react-redux';
import { COUNTRIES } from '../constants';
import { useEffect } from 'react';

const CreatePlayerModal = ({
  isModalVisible,
  createPlayer,
  editMode,
  player,
}) => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    form.setFieldsValue({
      name: player.name,
      country: player.country,
      winnings: player.winnings,
    });
  });

  const handleOk = () => {
    dispatch(openCreatePlayerModal(false));
    editMode(null);
  };

  const handleCancel = () => {
    dispatch(openCreatePlayerModal(false));
    editMode(null);
  };

  const onFinish = async (values) => {
    await createPlayer(values);
    dispatch(openCreatePlayerModal(false));
    editMode(null);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="cerate"
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          afterClose={() => form.resetFields()}
        >
          <Form.Item
            label="Username"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Country"
            name="country"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Select>
              {Object.keys(COUNTRIES).map((c) => {
                return <Select.Option value={c}>{COUNTRIES[c]}</Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="Winnings"
            name="winnings"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreatePlayerModal;
