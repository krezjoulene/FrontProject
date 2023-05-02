import React from "react";
import Back from "./back/back";
import * as Components from './Components';

function Sign() {
    const [signIn, toggle] = React.useState(true);
    return (
        <>
            <Back />
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Créer un compte</Components.Title>
                        <Components.Input type='text' placeholder='Nom' />
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Mot de passe' />
                        <Components.Button>S'inscrire</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Se connecter</Components.Title>
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Mot de passe' />
                        <Components.Anchor href='#'>Mot de passe oublié ?</Components.Anchor>
                        <Components.Button>Se connecter</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Bienvenue de retour !</Components.Title>
                            <Components.Paragraph>
                                Pour rester connecté avec nous, veuillez vous connecter avec vos informations personnelles.
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Se connecter
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Bonjour, ami !</Components.Title>
                            <Components.Paragraph>
                                Entrez vos informations personnelles et commencez votre voyage avec nous.
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                S'inscrire
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        </>
    )
}

export default Sign