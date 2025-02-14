<h3 id="integro-product">Интеграция со страницей товара.</h3>
                <p>Интеграция модуля с движком OpenCart осуществляется с помощью файлов модификаторов <code>ocmod</code> или <code>vqmod</code>. О назначении файлов в разделе <a href="included.html#whats-included">Структура архива</a>. Об
                    установке модификаторов в разделе <a href="install.html#install-install">Установка</a>.</p>
                <div class="callout callout-danger">
                    <h4>Важно.</h4>
                    <p>Все действия, описанные ниже, производимые с помощью этого модификатора, не вносят изменений в Базу Данных. Все изменения происходят только в браузере, на странице карточки одного товара.</p>
                    <p>Изменения в Базе Данных происходят только после того, как Вы нажмете кнопку "Сохранить". Работа с Базой Данных осуществляется штатными средствами OpenCart.</p>
                    <p>Сохранить или не сохранить изменения принимаете решение Вы и только Вы.</p>
                </div>
                <p>Если модификация прошла корректно, то в сайдбаре административной панели в меню <mark><small>Каталог ⇒ Характеристики</small></mark>должен появиться пункт <span>Attribut<b style="color: #2199C7;">&amp;</b>co</span>, а в
                    карточке товара должны появиться дополнительные кнопки управления.</p>

                <table id="attribute" class="table table-striped table-bordered table-hover" style="font-size: 13px;">
                    <thead>
                        <tr>
                            <td class="text-left">
                                <div class="row">
                                    <input type="text" name="attribute-group" value="" placeholder="Группа характеристик" id="attribute-group" class="col-md-5 col-sm-12 col-xs-12" style="font-weight:normal;" autocomplete="off">
                                    <ul class="dropdown-menu"></ul>
                                    <div class="col-md-1 col-sm-1 col-xs-12"></div>
                                    <button type="button" id="attach-attribute" class="btn btn-success col-md-5 col-sm-12 col-xs-12 btn-sm pull-right"><i class="fa fa-plus"></i> Атрибуты категорий</button>
                                </div>
                            </td>
                            <td class="text-left"></td>
                            <td id="serv-panel">
                                <div class="row">
                                    <div class="col-lg-6 col-md-12 form-inline"><label class="radio-inline"><input type="radio" name="filter-values" id="filter-nofilter" value="all" checked="">Все</label><label class="radio-inline"><input
                                                type="radio" name="filter-values" id="filter-category" value="categories">Категории</label><label class="radio-inline"><input type="radio" name="filter-values" id="filter-duty"
                                                value="duty">Дежурные</label></div>
                                    <div class="col-lg-6 col-md-12 form-inline">
                                        <div class="btn-group"><button type="button" id="template-view" class="btn btn-info btn-sm"><i class="fa fa-th-list"></i>Шаблоны</button><button type="button" id="values-view"
                                                class="btn btn-outline-dark btn-sm"><i class="fa fa-th"></i>Значения</button></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-sm-12"><select class="form-control method-view" id="method-view" style="font-weight:normal;">
                                            <option key="clean" value="clean" style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">Очищать</option>
                                            <option key="unchange" value="unchange" style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">Не менять</option>
                                            <option key="overwrite" value="overwrite" style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">Заменять дежурным</option>
                                            <option key="ifempty" value="ifempty" selected="" style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">Только в пустые</option>
                                        </select></div>
                                    <div class="col-md-6 col-sm-12">
                                        <div class="btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-outline-dark">
                                                <input type="checkbox" name="multi" id="multi"><i class="fa fa-copy"></i>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="text-left"></td>
                        </tr>

                    </thead>
                    <tbody></tbody>
                </table>

                <p>В правой стороне таблицы над текстовой областью для каждго языка должно появиться поле выбора <span class="node">Значений</span> из списка.</p>
                <table class="table table-striped table-bordered table-hover" style="font-size: 13px;">
                    <thead>
                        <tr>
                            <td class="text-left">

                            </td>
                            <td class="text-left"></td>
                            <td>
                            </td>
                            <td class="text-left"></td>
                        </tr>

                    </thead>
                    <tbody>
                        <tr id="attribute-row1">
                            <td class="text-left" style="width: 40%;"><label id="group-name1">Processor</label>
                                <input type="text" name="product_attribute[1][name]" value="Clockspeed" placeholder="Характеристики" class="form-control" autocomplete="off">
                                <ul class="dropdown-menu"></ul>
                                <input type="hidden" name="product_attribute[1][attribute_id]" value="3">
                            </td>
                            <td class="text-left" style="width: 5%;"><input type="text" value="13" class="form-control" readonly="true"></td>

                            <td class="text-left">

                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><img src="/language/ru-ru.png" title="Russian"></span>
                                    </div>
                                    <div style="width: 85%;">
                                        <select name="attribute_select_3" class="form-control" attribute_id="3" language_id="1" attribute_row="1">
                                            <option key="{0}" value="{0}"> --- Выберите --- </option>
                                            <option key="" value="4Мгц">4Мгц</option>
                                        </select>
                                        <textarea name="product_attribute[1][product_attribute_description][1][text]" rows="3" placeholder="Текст" class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><img src="/language/en-gb.png" title="Russian"></span>
                                    </div>
                                    <div style="width: 85%;">
                                        <select name="attribute_select_3" class="form-control" attribute_id="3" language_id="2" attribute_row="1">
                                            <option key="{0}" value="{0}"> --- Выберите --- </option>
                                            <option key="" value="4MGh">4MGh</option>
                                        </select>
                                        <textarea name="product_attribute[1][product_attribute_description][2][text]" rows="3" placeholder="Текст" class="form-control"></textarea>
                                    </div>
                                </div>
                            </td>
                            <td class="text-right"><button type="button" onclick="product_attribute_id = product_attribute_id.filter(item=>item !== $('#attribute-row1').find('[name *= attribute_id]').val()); $('#attribute-row1').remove(); "
                                    data-toggle="tooltip" title="" class="btn btn-danger" data-original-title="Удалить"><i class="fa fa-minus-circle"></i></button></td>

                        </tr>
                    </tbody>
                </table>


                <p>Станут доступны следующие <span class="text-danger font-italic">операции</span> :</p>
                <ul>
                    <li>Вставка <span class="node">Шаблонов</span> или <span class="node">Значений</span> из выпадающего списка;</li>
                    <li>Вставка <span class="node">Дежурных шаблоном</span> в момент выбора <span class="node">Атрибута</span>;</li>
                    <li>Вставка <span class="node">Атрибутов</span> с их <span class="node">Дежурных шаблонов</span> в момент привязки или перепривязки товара к категории на вкладке <mark><small>Связи</small></mark>;</li>
                    <li>Вставка всех <span class="node">Атрибутов категории</span> с их <span class="node">Дежурным шаблоном</span> одной кнопкой;</li>
                    <li>Вставка всех <span class="node">Атрибутов</span> выбранной из списка группы с их <span class="node">Дежурным шаблоном</span>;</li>
                </ul>