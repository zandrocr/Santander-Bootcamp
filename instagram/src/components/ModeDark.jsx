const ModeDark = ({checked}) => {

    return (
    <div>
        <label htmlFor='check'>
            <div className='button d-flex align-items-center'>
                <div className='circle'><img src={checked} alt="moon" /></div>
            </div>
        </label>
    </div> );
}

export default ModeDark;