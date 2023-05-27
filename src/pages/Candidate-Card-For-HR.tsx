import React from 'react';
import '../styles/Page-HR.css'
import {
    IonBadge, IonButton,
    IonButtons,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol,
    IonContent, IonFab, IonFabButton, IonGrid,
    IonHeader, IonIcon, IonItem, IonLabel, IonList,
    IonMenu,
    IonMenuButton,
    IonPage, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonText, IonThumbnail,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import PopupMenu from "./Popup-Menu";
function CandidateCardForHR() {
    return (
        <>
            <PopupMenu/>
            <IonPage id="main-content">

                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Личные данные</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>

                    <IonGrid className="candidate-data">
                        <IonRow>
                            <IonCol>
                                <IonThumbnail className="candidate-image-thumbnail">
                                    <img className="candidate-image" alt="Silhouette of mountains"
                                         src="https://ionicframework.com/docs/img/demos/thumbnail.svg"/>
                                </IonThumbnail>
                            </IonCol>
                            <IonCol className="candidate-card">
                                <IonCard className="ion-no-margin" style={{borderRadius: '20px', width: "40vh"}}>
                                    <IonCardHeader>
                                        <IonCardTitle>Name of candidate</IonCardTitle>
                                        <IonCardSubtitle>Информация:</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonLabel>Телефон</IonLabel>
                                                <IonLabel slot="end">external ID</IonLabel>
                                            </IonItem>

                                            <IonItem>
                                                <IonLabel>Почта</IonLabel>
                                                <IonLabel slot="end">internal ID</IonLabel>
                                            </IonItem>

                                            <IonItem>
                                                <IonLabel>Телефон</IonLabel>
                                                <IonLabel slot="end">external ID</IonLabel>
                                            </IonItem>

                                            <IonItem>
                                                <IonLabel>In stock</IonLabel>
                                                <IonLabel slot="end">QOH</IonLabel>
                                            </IonItem>
                                        </IonList>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    <IonCol style={{marginLeft: "40px"}}>
                        <IonText style={{fontSize: "30px"}}>Активные отклики</IonText>
                    </IonCol>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="4">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle>Backend разработчик на Java</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel>Статус</IonLabel>
                                            <IonBadge color="warning">В процессе отбора</IonBadge>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Последний пройденный этап</IonLabel>
                                            <IonLabel color="medium" slot="end">Тестирование</IonLabel>

                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonLabel>Анкета</IonLabel>
                                            <IonIcon icon="../images/chevron-forward-outline.svg" slot="end"></IonIcon>
                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonLabel>Тест</IonLabel>
                                            <IonIcon icon="../images/chevron-forward-outline.svg" slot="end"></IonIcon>
                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonLabel>Результаты этапов</IonLabel>
                                            <IonIcon icon="../images/chevron-forward-outline.svg" slot="end"></IonIcon>
                                        </IonItem>

                                        <IonButton expand="block" fill="clear" color="transparent">
                                            <IonList>
                                                <IonItem>
                                                    <IonSelect interface="popover" placeholder="Назначить этап">
                                                        <IonSelectOption value="apples">Интервью</IonSelectOption>
                                                        <IonSelectOption value="oranges">Тестирование</IonSelectOption>
                                                    </IonSelect>
                                                </IonItem>
                                            </IonList>
                                        </IonButton>

                                        <IonButton expand="block" fill="clear" color="transparent">
                                            <IonList>
                                                <IonItem>
                                                    <IonSelect interface="popover" placeholder="Выдать результат">
                                                        <IonSelectOption value="apples">Назначить предложение</IonSelectOption>
                                                        <IonSelectOption value="oranges">Отказ</IonSelectOption>
                                                    </IonSelect>
                                                </IonItem>
                                            </IonList>
                                        </IonButton>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>

                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="4">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle>Backend разработчик на Java</IonCardTitle>

                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel>Статус</IonLabel>
                                            <IonBadge color="warning">В процессе отбора</IonBadge>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Последний пройденный этап</IonLabel>
                                            <IonLabel color="medium" slot="end">Тестирование</IonLabel>

                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonLabel>Анкета</IonLabel>
                                            <IonIcon icon="../images/chevron-forward-outline.svg" slot="end"></IonIcon>
                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonLabel>Тест</IonLabel>
                                            <IonIcon icon="../images/chevron-forward-outline.svg" slot="end"></IonIcon>
                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonLabel>Результаты этапов</IonLabel>
                                            <IonIcon icon="../images/chevron-forward-outline.svg" slot="end"></IonIcon>
                                        </IonItem>

                                        <IonButton expand="block" fill="clear" color="transparent">
                                            <IonList>
                                                <IonItem>
                                                    <IonSelect interface="popover" placeholder="Назначить этап">
                                                        <IonSelectOption value="apples">Интервью</IonSelectOption>
                                                        <IonSelectOption value="oranges">Тестирование</IonSelectOption>
                                                    </IonSelect>
                                                </IonItem>
                                            </IonList>
                                        </IonButton>

                                        <IonButton expand="block" fill="clear" color="transparent">
                                            <IonList>
                                                <IonItem>
                                                    <IonSelect interface="popover" placeholder="Выдать результат">
                                                        <IonSelectOption value="apples">Назначить предложение</IonSelectOption>
                                                        <IonSelectOption value="oranges">Отказ</IonSelectOption>
                                                    </IonSelect>
                                                </IonItem>
                                            </IonList>
                                        </IonButton>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>

                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="4">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle>Backend разработчик на Java</IonCardTitle>

                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel>Статус</IonLabel>
                                            <IonBadge color="warning">В процессе отбора</IonBadge>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Последний пройденный этап</IonLabel>
                                            <IonLabel color="medium" slot="end">Тестирование</IonLabel>

                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonLabel>Анкета</IonLabel>
                                            <IonIcon icon="../images/chevron-forward-outline.svg" slot="end"></IonIcon>
                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonLabel>Тест</IonLabel>
                                            <IonIcon icon="../images/chevron-forward-outline.svg" slot="end"></IonIcon>
                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonLabel>Результаты этапов</IonLabel>
                                            <IonIcon icon="../images/chevron-forward-outline.svg" slot="end"></IonIcon>
                                        </IonItem>

                                        <IonButton expand="block" fill="clear" color="transparent">
                                            <IonList>
                                                <IonItem>
                                                    <IonSelect interface="popover" placeholder="Назначить этап">
                                                        <IonSelectOption value="apples">Интервью</IonSelectOption>
                                                        <IonSelectOption value="oranges">Тестирование</IonSelectOption>
                                                    </IonSelect>
                                                </IonItem>
                                            </IonList>
                                        </IonButton>

                                        <IonButton expand="block" fill="clear" color="transparent">
                                            <IonList>
                                                <IonItem>
                                                    <IonSelect interface="popover" placeholder="Выдать результат">
                                                        <IonSelectOption value="apples">Назначить предложение</IonSelectOption>
                                                        <IonSelectOption value="oranges">Отказ</IonSelectOption>
                                                    </IonSelect>
                                                </IonItem>
                                            </IonList>
                                        </IonButton>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>

                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="4">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle>Backend разработчик на Java</IonCardTitle>

                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel>Статус</IonLabel>
                                            <IonBadge color="warning">В процессе отбора</IonBadge>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Последний пройденный этап</IonLabel>
                                            <IonLabel color="medium" slot="end">Тестирование</IonLabel>

                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonLabel>Анкета</IonLabel>
                                            <IonIcon icon="../images/chevron-forward-outline.svg" slot="end"></IonIcon>
                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonLabel>Тест</IonLabel>
                                            <IonIcon icon="../images/chevron-forward-outline.svg" slot="end"></IonIcon>
                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonLabel>Результаты этапов</IonLabel>
                                            <IonIcon icon="../images/chevron-forward-outline.svg" slot="end"></IonIcon>
                                        </IonItem>

                                        <IonButton expand="block" fill="clear" color="transparent">
                                            <IonList>
                                                <IonItem>
                                                    <IonSelect interface="popover" placeholder="Назначить этап">
                                                        <IonSelectOption value="apples">Интервью</IonSelectOption>
                                                        <IonSelectOption value="oranges">Тестирование</IonSelectOption>
                                                    </IonSelect>
                                                </IonItem>
                                            </IonList>
                                        </IonButton>

                                        <IonButton expand="block" fill="clear" color="transparent">
                                            <IonList>
                                                <IonItem>
                                                    <IonSelect interface="popover" placeholder="Выдать результат">
                                                        <IonSelectOption value="apples">Назначить предложение</IonSelectOption>
                                                        <IonSelectOption value="oranges">Отказ</IonSelectOption>
                                                    </IonSelect>
                                                </IonItem>
                                            </IonList>
                                        </IonButton>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    );
}

export default CandidateCardForHR;