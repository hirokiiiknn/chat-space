# README

# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|username|string|null: false|
|groups_id|integer|null: false, foreign_key: true|
### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|users_id|integer|null: false, foreign_key: true|
### Association
- has_many :messages
- has_many :users_groups
- has_many  :users, through: :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- belongs_to :groups


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|integer|null: false|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- belongs_to :groups