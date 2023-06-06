import { Button, DatePicker, Form, Input, Radio } from 'antd'
import './ModalCss.css'
import TextArea from 'antd/es/input/TextArea'
import { useState } from 'react'
import dayjs from 'dayjs'

const Modal = ({ closeModal, info, setInfo }) => {
    const [customer, setCustomer] = useState(info)

    const onChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value })
    }

    const onBirthChange = (date, dateString) => {
        const convertedDate = dayjs(dateString).format('DD-MM-YYYY')
        setCustomer({ ...customer, 'birth': convertedDate })
    }
    console.log(customer);
    return (
        <div className='modalMain'>
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 18 }}>
                <Form.Item name='name' label='Họ Tên'
                >
                    <Input name='name' value={customer.name} defaultValue={customer.name} onChange={onChange} />
                </Form.Item>

                {/* ======================== */}

                <Form.Item name='position' label='Vị Trí'>
                    <Input name='position' value={customer.position} defaultValue={customer.position} onChange={onChange} />
                </Form.Item>

                {/* ======================== */}

                <Form.Item name='birth' label='Ngày Sinh' >
                    <DatePicker name='birth' value={customer.birth} style={{ width: '100%' }} onChange={onBirthChange} />
                </Form.Item>

                {/* ======================== */}

                <Form.Item name='gender' label='Giới Tính'>
                    <Radio.Group value={customer.gender} defaultValue={customer.gender} onChange={onChange} >
                        <Radio value={"Nam"}>Nam</Radio>
                        <Radio value={"Nữ"}>Nữ</Radio>
                    </Radio.Group>
                </Form.Item>

                {/* ======================== */}

                <Form.Item name='email' label='Email'>
                    <Input name='email' value={customer.email} defaultValue={customer.email} onChange={onChange} />
                </Form.Item>

                {/* ======================== */}

                <Form.Item name='address' label='Địa Chỉ'>
                    <Input name='address' value={customer.address} defaultValue={customer.address} onChange={onChange} />
                </Form.Item>

                {/* ======================== */}

                <Form.Item name='desc' label='Mô Tả'>
                    <TextArea name='desc' value={customer.desc} defaultValue={customer.desc} onChange={onChange} />
                </Form.Item>

                {/* ======================== */}

                <Form.Item wrapperCol={{ span: 24 }} className='btnwrap'>
                    <Button type='primary' className='btn' onClick={()=>{
                        setInfo(customer)
                        closeModal()
                    }}>
                        ENTER
                    </Button>
                    <Button type='primary' danger className='btn2' onClick={() => { closeModal() }}>
                        CANCER
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default Modal