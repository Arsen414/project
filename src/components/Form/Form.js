import React from 'react'
import "./Form.css"
export default function Form() {
    return (
        <form action="" class="form">
            <h1 class="form__title">
                Log In
    </h1>
            <h2 class="form__label">
                Email

    </h2>

            <input type="email" class="form__input" placeholder="Email" />
            <h2 class="form__label"> Password</h2>
            <input type="password" class="form__input" placeholder="Password " />
            <div class="remember"> <input type="checkbox" class="form__checkbox" id="" />
                <span class="form__checkbox-label form__label">
                    Remember Me
        </span></div>
            <button class="form__button">
                LOG IN
    </button>
            <button class="form__button">
                SIGN UP
    </button>

            <footer class="form__footer">
                something about <a href="#">privacy policy</a> and <a href="#">terms</a> of service
    </footer>
        </form>
    )
}
