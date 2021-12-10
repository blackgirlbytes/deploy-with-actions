import React from 'react';

const EmojiCards = ({ emojiResult }) => {
    function addDefaultSrc(ev) {
        console.log(ev.target)
        ev.target.src = 'https://thumbs.dreamstime.com/b/vector-oops-symbol-over-white-29840798.jpg'
        ev.target.alt = 'Image Does Not Exist'
        ev.target.className = "m-auto w-16 h-16"
    }
    return (
        <div>
            <ol className="flex row justify-center">
                {emojiResult.slice(0, 6).map((emoji, value) => (
                    <li key={value} className="p-4 rounded-md w-max my-8 mx-3 shadow-2xl text-center" >
                        <img className="m-auto w-16 h-16" src={emoji.emoji_url} alt={emoji.emoji_name.replaceAll('_', ' ')} onError={addDefaultSrc} />
                        <span>{emoji.emoji_name.replaceAll('_', ' ')}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default EmojiCards;