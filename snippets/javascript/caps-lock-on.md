# Detect Caps Lock Is On

To check if the caps lock is on, you use the `getModifierState()` method of the
`KeyboardEvent` object:

The `getModifierState()` method returns `true` if a modifier is active;
otherwise, it returns `false`.

The `event.getModifierState('CapsLock')` can be used to detect if the caps lock
is on.

## Suppose you have a password field like this

    <input type="password" name="password" id="password" placeholder="Enter a password">
        <div class="message"></div>

The following shows a warning message if you turn on the caps lock and type the
password:

    const password = document.querySelector('#password'); const message =
    document.querySelector('.message');

    password.addEventListener('keyup', function (e) { if
    (e.getModifierState('CapsLock')) { message.textContent = 'Caps lock is on'; }
    else { message.textContent = ''; } });
