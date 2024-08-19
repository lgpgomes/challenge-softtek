import './CardsMember.scss'
import Card from './Card'

function CardsMember () {
    return ( 
        <div className='cards-member'>
            <Card>
                <div className='card-member-pic' id='bialas'></div>
                <div className='card-member-description'>

                </div>
            </Card>
            <Card>
                <div className='card-member-pic' id='luiz'></div>
                <div className='card-member-description'>

                </div>
            </Card>
            <Card>
                <div className='card-member-pic' id='higor'>
                    
                </div>
                <div className='card-member-description'>

                </div>
            </Card>
            <Card>
                <div className='card-member-pic'>
                    
                </div>
                <div className='card-member-description'>

                </div>
            </Card>
            <Card>
                <div className='card-member-pic'>
                    
                </div>
                <div className='card-member-description'>

                </div>
            </Card>
        </div>
    )
}

export default CardsMember