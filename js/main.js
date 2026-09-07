
document.querySelector('#showButton').addEventListener('click', showAffirmation)


function showAffirmation() {

  let typed = document.querySelector('#birthMonth').value

  let month = typed.trim().toLowerCase()


  let affirmation = ''

  if (month === 'january') {
    affirmation = 'I am loved and worthy.'

  } else if (month === 'february') {
    affirmation = 'I am more than my circumstances dictate.'

  } else if (month === 'march') {
    affirmation = ' I am peaceful and whole.'

  } else if (month === 'april') {
    affirmation = "I am still learning so it’s okay to make mistakes."

  } else if (month === 'may') {
    affirmation = 'I breathe in healing, I exhale the painful things that burden my heart.'

  } else if (month === 'june') {
    affirmation = ' I breathe in trust, I exhale doubt.'

  } else if (month === 'july') {
    affirmation = 'I have everything I need to succeed.'

  } else if (month === 'august') {
    affirmation = 'I look forward to tomorrow and the opportunities that await me.'

  } else if (month === 'september') {
    affirmation = 'I nourish myself with kind words and joyful foods.'

  } else if (month === 'october') {
    affirmation = 'I respect the cycle of the seasons.'

  } else if (month === 'november') {
    affirmation = 'My life is not a race or competition.'

  } else if (month === 'december') {
    affirmation = 'I am in charge of how I feel and I choose to feel happy'

  } else {

    affirmation = 'Try typing a full month name, like December.'
  }


  document.querySelector('#placeToPutResult').innerText = affirmation
}