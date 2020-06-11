const relativeDate = (day) => {
  const Now = new Date()
  return new Date(Now.setDate(Now.getDate() + day))
}
const relativeMonth = (month) => {
  const Now = new Date()
  return new Date(Now.setMonth(Now.getMonth + month))
}

const relativeYear = (year) => {
  const Now = new Date()
  return new Date(Now.setFullYear(Now.getFullYear() + year))
}

export const japaneseDays = {
  今日: new Date(),
  明日: relativeDate(1),
  明後日: relativeDate(2),
  明々後日: relativeDate(3),
  昨日: relativeDate(-1),
  一昨日: relativeDate(-2),
  来週: relativeDate(7),
  再来週: relativeDate(14),
  先週: relativeDate(-7),
  来年: relativeYear(1),
  再来年: relativeYear(2),
  昨年: relativeYear(-1),
  一昨年: relativeYear(-2),
}

export const formatInputDay = (date) => {
  const formatDay = Intl.DateTimeFormat('en-US').format(new Date(date))
  const [month, day, year] = formatDay.split('/')
  return `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`
}
