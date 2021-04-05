
/**
 * 
 * @param {object} store for handle modal window
 * @returns the logs every time an event is dispatched
 */

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  }
  
  export default logger