export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

 
export function formatQuestion (question, author, authedUser){
  const { id, timestamp} = question
  const { name, avatarURL } = author
  // have authedUser found in optionOne.votes or optionTwo.votes  
  const isAnswer = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)?true:false ; 
  const optionOneText =question.optionOne.text; 
  const optionTwoText = question.optionTwo.text;

  // can result page question mix with this ?
  return {
    name,
    id,
    timestamp,
    avatar:avatarURL,
    isAnswer,
    optionOneText,
    optionTwoText
  }
}

export function truncateString(str, start, end) {
  if (str.length <= end) {
    return str
  }
  return '..'+str.slice(start, end) + '...'
}

