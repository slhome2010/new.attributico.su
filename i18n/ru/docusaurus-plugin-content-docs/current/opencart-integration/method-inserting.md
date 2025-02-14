<h3 id="integro-override">Переопределение способа вставки значений.</h3>
                <p>До сих пор <span class="node">Значения</span> или <span class="node">Шаблоны</span> в товар вставлялись в соответствии со способом, который установлен в настройках <a class="anchor"
                        href="settings.html#settings-product"><mark><small>Добавление значений атрибута в товар</small></mark></a>.</p>
                <p>Чтобы каждый раз не менять базовые настройки, добавлена возможность оперативно <mark><em>переопределить способ</em></mark> вставки значений.</p>
                <select class="form-control" id="method-view" style="margin-left:3px; font-weight:normal; width:27%">
                    <option value="1" style="overflow:hidden;" white-space:nowrap;="" text-overflow:ellipsis;="">Очищать</option>
                    <option value="2" style="overflow:hidden;" white-space:nowrap;="" text-overflow:ellipsis;="">Не менять</option>
                    <option value="3" style="overflow:hidden;" white-space:nowrap;="" text-overflow:ellipsis;="">Заменять дежурным</option>
                    <option selected="" value="4" style="overflow:hidden;" white-space:nowrap;="" text-overflow:ellipsis;="">Только в пустые</option>
                </select>
                <p></p>
                <p><mark><em>Переопределенный способ</em></mark> имеет приоритет, но действует только на время работы в карточке товара. При перезагрузке страницы или загрузке другого товара он будет сброшен к <a class="anchor"
                        href="settings.html#settings-product"><mark><small>действующей настройке</small></mark></a> модуля. Действие <mark><em>переопределенного способа</em></mark> распространяется на все <a href="#integro-product"><span
                            class="text-danger font-italic">операции</span></a> с <span class="node">Дежурными шаблонами</span> в карточке товара.</p>

                <p>Вставка <span class="node">Дежурного шаблона</span> производится синхронно для всех языков в момент привязки к категории или выбора нового <span class="node">Атрибута</span>.</p>
                <p>Если фильтр переключен в положение "Дежурные", а переключатель управления видом списка находится в положении "Шаблоны", то в списке будут только <span class="node">Дежурные шаблоны</span> и в момент выбора из списка
                    произойдет синхронная подстановка в другие языки соответствующих им <span class="node">Дежурных шаблонов</span>.</p>
                <p>Если вы хотите защитить ранее введенные <span class="node">Значения</span>, выбирайте способ вставки "Только в пустые".</p>