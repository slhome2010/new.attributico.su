<h2 id="integro-filter">Фильтр значений.</h2>
                <p>В магазинах с большим количеством товаров, <span class="node">Атрибутов</span> и их <span class="node">Значений</span> список, подключаемый к полю выбора может быть очень длинным. Это вызывает определенные неудобства при
                    заполнении таблицы. Фильтр позволяет ограничить выдачу <span class="node">Значениями</span> только отмеченных на вкладке <mark><small>Связи</small></mark> категорий (не путать со <span class="node">Значениями атрибутов
                        категорий</span>) или <a class="anchor" href="theory.html#theory-duty"><span class="node">Дежурного шаблона</span></a></p>
                <p>Если отмечен пункт "Все", то в список попадут все <span class="node">Значения</span> данного <span class="node">Атрибута</span> для всех товаров, плюс <span class="node">Дежурный шаблон</span>.</p>
                <div>
                    <label class="radio-inline">
                        <input type="radio" name="filter-values" id="filter-nofilter1" value="all" checked> Все
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="filter-values" id="filter-category1" value="categories"> Категории
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="filter-values" id="filter-duty1" value="duty"> Дежурные
                    </label>
                    <label class="radio-inline"></label>
                </div>
                <p></p>
                <p>Фильтр работает в оперативном режиме, перезагрузка списка <span class="node">Значений</span> происходит сразу после переключения режима. На больших магазинах иногда заметны задержки. Т.е. после переключения надо немного
                    подождать.</p>