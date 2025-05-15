import { Pagination } from 'react-bootstrap'

export default function PaginationComp({data}) {

    const totalPage = Math.ceil(data.length/9) || 5

    let active = 2
    let items = []
    for (let number = 1; number <= totalPage; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>
        )
    }
    return (
        <div className='position-relative mt-5'>

            <Pagination className='position-absolute top-0 start-50 translate-middle'>
                <Pagination.Prev />
                {items}
                <Pagination.Next />
            </Pagination>

        </div>
    )
}
