const TextField = ({ text }) => {
    return (
        <p className="text-white mb-4 text-xl"
            style={{
                width: '100%',
                fontStyle: 'italic',
                fontWeight: '400',
                lineHeight: '150%',
                wordWrap: 'break-word'
            }}
        >
            {text}
        </p>
    )
}

export default TextField